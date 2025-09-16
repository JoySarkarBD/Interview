interface SectionTitleProps {
  badgeText?: string;
  title?: string;
  description?: string;
}
const SectionTitle = ({ badgeText, title, description }: SectionTitleProps) => {
  return (
    <div className={`mx-auto mb-8 max-w-5xl text-center`}>
      {badgeText && (
        <span className="font-outfit mb-[29px] inline-block rounded-lg border-2 border-black bg-white px-3.5 py-2 text-sm font-medium text-gray-800 md:mb-2.5 md:text-base lg:mb-[22px] lg:px-5 lg:py-2.5 lg:text-lg">
          {badgeText}
        </span>
      )}
      {title && (
        <h2 className="font-raleway md:tex-[48px] mb-2.5 text-[38px] font-bold text-gray-900 md:mb-3.5 lg:mb-[19px] lg:text-[58px]">
          {title}
        </h2>
      )}
      {description && (
        <p className="font-outfit mx-auto max-w-4xl text-base font-medium text-[#333333] lg:text-xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
