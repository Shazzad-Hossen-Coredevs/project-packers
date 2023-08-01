

const Badge = ({text, styles = 'light'}) => {
    const background = {
        success: 'bg-[#86EFAC]',
        light: 'bg-[#E4E5E7]',
        warning: 'bg-[#F7DA7C]',
        danger: 'bg-[#FECACA]'
    }
  return (
    <div className={`flex items-center gap-2 ${background[styles]} rounded-full py-2 px-4 w-fit`}>
      <span className="w-3 h-3 rounded-full bg-secondary opacity-100"></span>
      <p className="text-black">{text || "No Text"}</p>
    </div>
  );
};

export default Badge;
