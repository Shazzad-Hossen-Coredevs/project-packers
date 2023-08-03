import Card from "../Components/UiElements/Card/Card";
import Heading from "../Components/UiElements/Heading/Heading";
import { adminCard } from "../../Store/Data";
import AreaChart from "../Components/UiElements/AreaChart/AreaChart";
import { areaChart } from "../../Store/Data";
import HeatMap from "../Components/UiElements/HeatMap/HeatMap";
const DashboardHome = () => {
  return (
    <div className="h-full px-5 ">
      <Heading title="Overview" />
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3 border-b border-[#0000001c] py-5">
          <div className="grid lg:grid-cols-5 ">
            {adminCard?.map((item, key) => (
              <Card key={key} type={item.title} data={item.value} />
            ))}
          </div>
        </div>
        <div className="col-span-3 sm:col-span-2">
          <div className="w-full bg-white p-5 border border-[#0000001f] rounded-md">
            <AreaChart data={areaChart} />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-1">
          <div className="w-full bg-white p-5 border border-[#0000001f] rounded-md">
            <HeatMap />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-3">table</div>
      </div>
    </div>
  );
};

export default DashboardHome;
