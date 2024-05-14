import { Flex, Select, Heading } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setPrepaidFilter: Dispatch<SetStateAction<string>>;
  setStartDateFilter: Dispatch<SetStateAction<string>>;
  setEndDateFilter: Dispatch<SetStateAction<string>>;
}

export default function TransactionFilters({
  setPrepaidFilter,
  setStartDateFilter,
  setEndDateFilter,
}: IProps) {
  return (
    <Flex alignItems="center" gap={4}>
      <Flex alignItems="center" gap={2}>
        <Heading size="xs" className={"capitalize"}>
          Filter By Customer Type
        </Heading>

        <Select
          onChange={(e) => setPrepaidFilter(e.target.value)}
          width={"150px"}
          variant="filled"
        >
          <option value="">All</option>
          <option value="prepaid">Prepaid</option>
          <option value="postpaid">Postpaid</option>
        </Select>
      </Flex>

      <div className="flex flex-col md:flex-row w-full md:w-auto gap-y-2 sm:gap-y-0 sm:gap-x-2 items-start md:items-center ">
        <label
          className="text-sm font-medium text-slate-600"
          htmlFor="startDate"
        >
          Start Date
        </label>
        <input
          onChange={(e) => setStartDateFilter(e.target.value)}
          className="rounded-lg border w-full sm:w-auto border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-600 shadow-sm"
          type="date"
          // value={startDate}
          id="startDate"
        />
      </div>

      <div className="flex flex-col md:flex-row w-full md:w-auto gap-y-2 sm:gap-y-0 sm:gap-x-2 items-start md:items-center ">
        <label
          className="text-sm font-medium text-slate-600"
          htmlFor="startDate"
        >
          End Date
        </label>
        <input
          onChange={(e) => setEndDateFilter(e.target.value)}
          className="rounded-lg border w-full sm:w-auto border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-600 shadow-sm"
          type="date"
          // value={startDate}
          id="endDate"
        />
      </div>
    </Flex>
  );
}
