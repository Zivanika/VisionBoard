"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableStat } from "@/app/context/tableContext";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

export function HomeTable({ tables }: { tables: TableStat[] }) {
  return (
    <Table className="w-full border border-gray-800 rounded-lg shadow-sm bg-gray-900 text-gray-300">

      <TableHeader className="bg-gray-800 text-gray-400">
        <TableRow>
          <TableHead className="w-1/5 py-3">SI.No</TableHead>
          <TableHead className="w-1/5">Table Name</TableHead>
          <TableHead className="w-1/5 hidden sm:table-cell">Columns</TableHead>
          <TableHead className="w-1/5">Sheets Linked</TableHead>
          <TableHead className="w-1/5 text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tables.length > 0 ? (
          tables.map((table, idx) => (
            <TableRow
              key={table._id}
              className="border-b border-gray-800 hover:bg-gray-800 transition"
            >
              <TableCell className="py-3">{idx + 1}</TableCell>
              <TableCell>{table.tableName}</TableCell>
              <TableCell className="hidden sm:table-cell">
                {table.columnCount}
              </TableCell>
              <TableCell>{table.sheetConnected}</TableCell>
              <TableCell className="text-right">
                <Link
                  href={`/tables/${table._id}`}
                  className="text-blue-400 hover:underline transition"
                >
                  View
                </Link>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-4 text-gray-500">
              No results found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
