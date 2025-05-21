import React from "react";

export default function ChatWindow({ messages }) {
    return (
        <section className="flex-1 overflow-y-auto p-2 sm:p-4 md:p-6 bg-gray-100">
            {messages.map(msg => (
                <div
                    key={msg.id}
                    className={`flex mb-2 md:mb-3 ${msg.from === "me" ? "justify-end" : "justify-start"}`}
                >
                    <div
                        className={`
                            px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-lg shadow
                            ${msg.from === "me"
                                ? "bg-blue-600 text-white rounded-br-none"
                                : "bg-white text-gray-800 rounded-bl-none"
                            }
                            max-w-[90vw] sm:max-w-[80vw] md:max-w-md lg:max-w-lg
                            text-sm sm:text-base md:text-lg
                            break-words transition-all
                        `}
                    >
                        {msg.text}
                        <div className="text-xs sm:text-sm text-gray-400 mt-1">{msg.status}</div>
                    </div>
                </div>
            ))}
        </section>
    );
}
