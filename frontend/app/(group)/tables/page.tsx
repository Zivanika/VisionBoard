"use client";

import { TableList } from "@/app/components/TableList";
import PageLoader from "@/app/components/PageLoader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";
import { useStats } from "@/app/context/tableContext";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";

const AllTables = () => {
  const { state } = useSidebar();
  const { stats, loading } = useStats();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTables = stats.tableStats.filter((table) =>
    table.tableName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <PageLoader />;

  return (
    <div className="p-4 flex flex-1 flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">
        Your Tables
      </h1>
      
      <Card className="flex items-center gap-2 px-3 py-2 w-full md:w-1/3 bg-gray-900 border border-gray-800 rounded-lg">
        <Search className="text-gray-400" />
        <Input
          className="flex-1 bg-transparent border-none text-gray-300 placeholder-gray-500 focus:ring-0"
          placeholder="Search for tables..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Card>
  
      <Card className="flex-1 rounded-lg overflow-y-auto p-4 bg-gray-900 border border-gray-800 shadow-sm">
        <TableList tables={filteredTables} />
      </Card>
    </div>
  );
  
};

export default AllTables;
