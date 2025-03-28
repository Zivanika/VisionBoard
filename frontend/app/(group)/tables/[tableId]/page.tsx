"use client";

import { AddColumn } from "@/app/components/AddColumn";
import { EditTableDialog } from "@/app/components/EditTable";
import { Card } from "@/components/ui/card";
import { useSidebar } from "@/components/ui/sidebar";
import { Edit2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { SheetTable } from "@/app/components/SheetTable";
import { useParams, useRouter } from "next/navigation";
import { getTableData } from "@/app/api/table";
import { TableData } from "@/app/schemas/schema";
import { ConnectSheet } from "@/app/components/ConnectSheet";
import PageLoader from "@/app/components/PageLoader";
import useWebSocket from "@/hooks/use-ws";

const SingleTable = () => {
  const { tableId } = useParams();
  const router = useRouter();
  const { state } = useSidebar();

  const [table, setTable] = useState<TableData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const [isConnected, setIsConnected] = useState(false);

  const isSheetConnected = !!table?.googleSheetId;
  useWebSocket(setTable, tableId as string, isSheetConnected);

  useEffect(() => {
    if (!tableId) router.push("/tables");

    const fetchTable = async () => {
      setLoading(true);
      const response = await getTableData(tableId as string);

      if (response.success) {
        setTable(response.data);
        // setIsConnected(!!response.data.googleSheetId);
      } else {
        setError(response.data);
      }
      setLoading(false);
    };

    fetchTable();
  }, [tableId, router]);

  if (loading) return <PageLoader />;
  if (error) return router.push("/tables");

  return (
    <div className="p-3 flex flex-1 flex-col gap-4 max-w-[1200px] w-full lg:w-full mx-auto overflow-hidden">
      <div className="flex items-center gap-2.5">
        <h1 className="text-3xl font-semibold text-gray-200">
          Table{" "}
          <span className="text-gray-400">
            {" "}
            {table?.tableName || "Table Name"}
          </span>
        </h1>

        <EditTableDialog
          triggerLabel={<Edit2 size={20} cursor={"pointer"} />}
          tableName={table!.tableName}
          tableId={table!.tableId}
          setTable={setTable}
        />
      </div>
      <Card className="rounded-md p-2 flex-row items-center justify-between">
        <AddColumn
          triggerLabel="Add Column"
          tableId={table!.tableId}
          setTable={setTable}
        />
        {table?.googleSheetId ? (
          <Card className="p-1.5 flex-row items-center gap-1.5 rounded-md">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            <p className="text-sm font-medium">
              {table?.googleSheetId ? "Sheet Connected" : "Not Connected"}
            </p>
          </Card>
        ) : (
          <ConnectSheet
            triggerLabel="Connect Sheet"
            tableId={table!.tableId}
            setTable={setTable}
          />
        )}
      </Card>
      <Card className="flex-1 overflow-hidden py-2 px-[1%]">
        <SheetTable columns={table?.columns || []} setTable={setTable} />
      </Card>
    </div>
  );
};

export default SingleTable;
