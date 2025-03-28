"use client";

import AddTableModal from "@/app/components/AddTable";
import { HomeTable } from "@/app/components/HomeTable";
import PageLoader from "@/app/components/PageLoader";
import { Card } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { useStats } from "@/app/context/tableContext";
import { Search } from "lucide-react";
import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

export default function Page() {
  const { state } = useSidebar();
  const { stats, loading } = useStats();
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) return <PageLoader />;

  const filteredTables = stats.tableStats.filter((table) =>
    table.tableName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      <h1 className="text-3xl font-semibold text-gray-200">
        Your <span className="text-gray-400">Dashboard</span>
      </h1>
  
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="bg-gray-900 p-6 rounded-lg shadow-sm flex flex-col items-center">
          <span className="text-4xl font-bold text-white">{stats.totalTables ?? 0}</span>
          <span className="text-sm text-gray-400 mt-1">Tables Created</span>
        </Card>
  
        <Card className="bg-gray-900 p-6 rounded-lg shadow-sm flex flex-col items-center">
          <span className="text-4xl font-bold text-white">{stats.totalColumns ?? 0}</span>
          <span className="text-sm text-gray-400 mt-1">Columns Created</span>
        </Card>
  
        <Card className="bg-gray-900 p-6 rounded-lg shadow-sm flex flex-col items-center">
          <span className="text-4xl font-bold text-white">{stats.totalGoogleSheetsLinked ?? 0}</span>
          <span className="text-sm text-gray-400 mt-1">Sheets Linked</span>
        </Card>
      </div>
  
      <div className="border border-gray-700 bg-gray-800 p-2 px-4 rounded-lg flex items-center gap-2 shadow-sm">
        <AddTableModal triggerLabel="Add Table" />
        <input
          type="text"
          className="flex-1 bg-transparent text-white text-sm outline-none border-none placeholder-gray-400 px-2"
          placeholder="Search for table..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search className="text-gray-400 hover:text-white transition" />
      </div>
  
      <Card className="bg-gray-900 min-h-[100vh] flex-1 rounded-lg shadow-sm p-4">
        <HomeTable tables={filteredTables} />
      </Card>
    </div>
  );
}  