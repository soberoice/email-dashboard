import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

export default function MessageReportsTable() {
  return (
    <div
      className="h-96 rounded-lg mt-10 mb-10"
      style={{ border: "1px solid #EAECF0", overflowY: "auto" }}
    >
      <p className="text-2xl text-semibold mb-4 p-4">Message Reports</p>
      <TableContainer className="w-full">
        <Table
          height="auto"
          lineHeight="30px"
          size="lg"
          variant="simple"
          className=" w-full"
        >
          <Thead padding={"100px"} bg={"#F9FAFB"} height={"72px"}>
            <Tr className="text-left">
              <Th style={{ width: "680px" }}>SMS</Th>
              <Th style={{ width: "250px" }}>Receiver</Th>
              <Th style={{ width: "90px" }}>statuse</Th>
              <Th style={{ width: "120px" }}>Time</Th>
              <Th>Pages</Th>
            </Tr>
          </Thead>
          <Tbody className="px-4">
            <Tr>
              <Td>Discover our new app features</Td>
              <Td>New app launch</Td>
              <Td>
                <button
                  className="w-20 h-6 rounded-lg flex justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  sent
                </button>
              </Td>
              <Td className="my-auto">
                <span className="flex flex-col">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </Td>
              <Td>2</Td>
            </Tr>
            <Tr>
              <Td>Abandoned cart</Td>
              <Td>Automated Email</Td>
              <Td isNumeric>
                <button
                  className="w-20 h-6 rounded-lg flex justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  sent
                </button>
              </Td>
              <Td className="my-auto">
                <span className="flex flex-col">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </Td>
              <Td isNumeric>254</Td>
            </Tr>
            <Tr>
              <Td>Discover our new app features</Td>
              <Td>08069567130</Td>
              <Td isNumeric>
                <button
                  className="w-20 h-6 rounded-lg flex justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  sent
                </button>
              </Td>
              <Td className="my-auto">
                <span className="flex flex-col">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </Td>
              <Td isNumeric>2500</Td>
            </Tr>
            <Tr>
              <Td>Discover our new app features</Td>
              <Td>New app launch</Td>
              <Td>
                <button
                  className="w-20 h-6 rounded-lg flex justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  sent
                </button>
              </Td>
              <Td className="my-auto">
                <span className="flex flex-col">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </Td>
              <Td>2</Td>
            </Tr>
            <Tr>
              <Td>Abandoned cart</Td>
              <Td>Automated Email</Td>
              <Td isNumeric>
                <button
                  className="w-20 h-6 rounded-lg flex justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  sent
                </button>
              </Td>
              <Td className="my-auto">
                <span className="flex flex-col">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </Td>
              <Td isNumeric>254</Td>
            </Tr>
            <Tr>
              <Td>Discover our new app features</Td>
              <Td>08069567130</Td>
              <Td isNumeric>
                <button
                  className="w-20 h-6 rounded-lg flex justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  sent
                </button>
              </Td>
              <Td className="my-auto">
                <span className="flex flex-col">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </Td>
              <Td isNumeric>2500</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
