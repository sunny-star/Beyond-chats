import React from "react";
import conversations from "../data/conversations.json";

export default function ConversationList({ selectedId, onSelect }) {
    return (
        <div>
            <div className="flex justify-between px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-500 bg-gray-50">
                <span>Open</span>
                <span>Waiting longest</span>
            </div>
            <ul>
                {conversations.map(conv => (
                    <li
                        key={conv.id}
                        className={`flex items-center px-2 sm:px-4 py-2 sm:py-3 cursor-pointer border-b border-gray-50 hover:bg-blue-50 transition ${selectedId === conv.id ? "bg-blue-100" : ""
                            }`}
                        onClick={() => onSelect(conv.id)}
                    >
                        <span
                            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full mr-2 sm:mr-3 font-bold text-white ${conv.status === "online" ? "bg-green-500" : "bg-gray-400"
                                }`}
                        >
                            {conv.initials}
                        </span>
                        <div className="flex-1 min-w-0">
                            <div className="font-medium text-gray-800 text-sm sm:text-base">{conv.name}</div>
                            <div className="text-xs sm:text-sm text-gray-500 truncate">{conv.snippet}</div>
                        </div>
                        <span className="ml-2 text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">{conv.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
