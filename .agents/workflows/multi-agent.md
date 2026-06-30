---
description: How to use Claude Code CLI as parallel worker agents alongside Antigravity for faster, token-efficient development
---

# Multi-Agent Workflow: Antigravity + Claude Code

## Architecture

**Antigravity** = orchestrator & architect (planning, browser testing, multi-file coordination)
**Claude Code** = parallel worker(s) spawned via terminal (focused single-task execution)

## When to Delegate to Claude Code

Delegate to Claude Code when:
- A task is **self-contained** and touches ≤3 files
- Work can run **in parallel** with what Antigravity is doing
- The task is **well-defined** (tests, linting fixes, single component, docs)
- You want to **save tokens** on mechanical/repetitive work

Do NOT delegate when:
- The task requires **browser verification** (only Antigravity has browser tools)
- The task needs **multi-step coordination** across many files
- You need the result **before** your next step (use synchronous mode instead)

## Invocation Patterns

### Pattern 1: Fire-and-forget (async background worker)
Best for independent tasks that don't block your current work.

```bash
// turbo
claude -p "Your detailed prompt here" \
  --model opus \
  --permission-mode acceptEdits \
  --max-budget-usd 0.50 \
  2>&1 | tail -20
```

Use `run_command` with a short `WaitMsBeforeAsync` (500ms) then check back with `command_status`.

### Pattern 2: Synchronous result (need output before continuing)
Best when you need Claude Code's output to inform your next step.

```bash
// turbo
claude -p "Analyze X and return a JSON summary" \
  --model opus \
  --permission-mode acceptEdits \
  --output-format json \
  2>&1
```

Use `run_command` with longer `WaitMsBeforeAsync` (10000ms).

### Pattern 3: Parallel workers (multiple tasks at once)
Spawn 2-3 Claude Code instances on different tasks simultaneously.

```bash
# Worker 1: Write tests
// turbo
claude -p "Write unit tests for components/X.tsx" --model opus --permission-mode acceptEdits &

# Worker 2: Fix linting
// turbo
claude -p "Fix all ESLint errors in app/" --model opus --permission-mode acceptEdits &
```

## Prompt Engineering for Delegation

Always include in your Claude Code prompts:
1. **Exact file paths** — Claude Code doesn't have your context
2. **Constraints** — what NOT to change
3. **Success criteria** — how to verify the task is done
4. **Scope limits** — prevent it from wandering into unrelated files

### Template:
```
You are working on the project at /home/zer0/Projects/medias-supply.
Task: [specific task]
Files to modify: [exact paths]
Constraints: Do NOT modify [files to avoid]. Keep existing code style.
When done: Run `npm run lint` to verify no errors.
```

## Safety Rules

1. **Never have both agents edit the same file simultaneously** — assign different files
2. **Use `--max-budget-usd`** to cap spending per task (default: $0.50)
3. **Use `--permission-mode acceptEdits`** for auto-approved file edits
4. **Always verify output** — check `command_status` and review changed files
5. **Git commit between delegations** so you can rollback if a worker messes up

## Cost Optimization

| Strategy | Details |
|---|---|
| Use `--model opus` for everything | Gives maximum quality and reasoning capability |
| Set `--max-budget-usd 0.25` for small tasks | Hard cap |
| Use `--effort low` for trivial tasks | Fewer tokens |

## Example Workflow

Antigravity orchestrating a feature implementation:

1. **Antigravity**: Plans architecture, creates implementation_plan.md
2. **Claude Code Worker 1**: `claude -p "Create component X per this spec: ..." --model opus --permission-mode acceptEdits`
3. **Claude Code Worker 2**: `claude -p "Write tests for component Y" --model opus --permission-mode acceptEdits`
4. **Antigravity**: Reviews both outputs, runs browser verification, integrates
5. **Antigravity**: Commits and updates walkthrough
