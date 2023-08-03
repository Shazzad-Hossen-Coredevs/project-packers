import Card from "../Components/UiElements/Card/Card";
import Heading from "../Components/UiElements/Heading/Heading";

const DashboardHome = () => {
  return (
    <div className="h-full px-5 overflow-y-auto">
      <Heading title="Overview" />
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3 border-b border-[#0000001c] py-5">
        <div className="container mx-auto">
      <ul className="space-y-4">
        {/* First child */}
        <li className="bg-blue-200">Item 1</li>

        {/* Elements except the first child */}
        <li className="bg-yellow-200 not:first-child:bg-red-200">Item 2</li>
        <li className="bg-green-200 not:first-child:bg-pink-200">Item 3</li>
        <li className="bg-purple-200 not:first-child:bg-indigo-200">Item 4</li>
      </ul>
    </div>
          <div className="grid grid-cols-4 divide-x-2  shrink-0">

          <Card type="cost" data={10440200} />
          <Card type="request" data={298} />
          <Card type="order" data={128} />
          <Card type="complete" data={100} />
          <Card type="cancel" data={28} />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-2">graph</div>
        <div className="col-span-3 sm:col-span-1">block</div>
        <div className="col-span-3 sm:col-span-3">table</div>
      </div>
    </div>
  );
};

export default DashboardHome;
