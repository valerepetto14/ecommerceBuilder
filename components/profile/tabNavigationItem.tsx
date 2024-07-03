interface TabItemProps {
  href: string;
  title: string;
  isActive: boolean;
}

const TabItem = ({ href, title, isActive }: TabItemProps) => {
  return (
    <li role="presentation">
      <a
        href={href}
        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-indigo-600 data-[twe-nav-active]:text-indigo-600 dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
        data-twe-toggle="pill"
        data-twe-target="#tabs-messages"
        role="tab"
        {...(isActive
          ? {
              "data-twe-nav-active": true,
              "aria-selected": true,
            }
          : {})}
        aria-controls="tabs-messages"
        aria-selected="false"
      >
        {title}
      </a>
    </li>
  );
};

export default TabItem;
