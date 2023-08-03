const Table = ({ type = "order",  }) => {
  const head = {
    order: [
      "Order ID",
      "Product Name",
      "Date",
      "Customer",
      "Status",
      "Items",
      "Total",
      "Action",
    ],
  };
  return (
    <table className="w-full">
      <thead>
        <tr className="bg-[#F8FAFC] border-y border-[#0000001c]">
          {head[type].map((item, index) => (
            <th
              key={index}
              className="text-sm text-[#475569] font-medium text-left py-[10px] px-4"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Table;
