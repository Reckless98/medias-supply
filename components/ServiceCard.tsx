import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items?: string[];
  href?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  items,
  href = "#",
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-neutral-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full">
        {/* Icon */}
        <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <div className="text-primary group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Items list */}
        {items && items.length > 0 && (
          <ul className="space-y-2 mb-4">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-neutral-600"
              >
                <svg
                  className="w-4 h-4 text-secondary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Arrow */}
        <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ดูรายละเอียด
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
