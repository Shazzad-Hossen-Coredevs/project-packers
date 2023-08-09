/**
 * 
 * @params type => customer || staff 
 * @params name => User Name
 * @params date => date 
 * @params  message => Message
 * 
 * @returns Chat card JSX element
 */


const ChatBubble = ({type ,name, date, message}) => {
  
    return (
        <div className={`flex gap-3 h-fit max-w-[400px] ${type !== 'customer' ? "ml-auto flex-row-reverse" : ""}`}>
            <span className="h-10 w-10 flex items-center justify-center shrink-0 rounded-full font-bold text-amber-800 bg-pink-400">XY</span>
            <div className={`p-2 ${type === 'customer' ? 'bg-[#CFF6EF]' : 'bg-secondary'} w-full grid gap-2  rounded-md`}>
                <div className="flex justify-between w-full">
                    <p className="text-[#3E949A] font-medium text-sm">{name}</p>
                    <p className="text-[#64748B] text-xs font-semibold">{date}</p>
                </div>
                <div className={type !== 'customer' ? "text-[#a7a7a7]" : "text-[#000316CC] "}>
                    {message}
                </div>
            </div>
        </div>
    );
};

export default ChatBubble;