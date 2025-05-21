import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaRegRectangleList } from "react-icons/fa6";

const detailsSections = [
    {
        title: "LINKS",
        items: [
            { label: "Tracker ticket", icon: "📎" },
            { label: "Back-office tickets", icon: "🎫" },
            { label: "Side conversations", icon: "💬" }
        ]
    },
    { title: "USER DATA" },
    { title: "CONVERSATION ATTRIBUTES" },
    { title: "COMPANY DETAILS" },
    { title: "SALESFORCE" },
    { title: "STRIPE" },
    { title: "JIRA FOR TICKETS" }
];

export default function CopilotPanel({ articles = [], onArticleClick }) {
    const [tab, setTab] = useState("copilot");
    const [openSections, setOpenSections] = useState({});

    const chat = [
        {
            from: "user",
            name: "You",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "How do I get a refund?"
        },
        {
            from: "ai",
            name: "Fin",
            avatar: null,
            text: (
                <>
                    <div className="mb-2">
                        <span className="inline-block bg-blue-50 text-gray-800 px-2 py-1 rounded">
                            We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund.
                            <sup className="text-blue-700 cursor-pointer ml-1" onClick={e => onArticleClick?.(articles[0], e)}>1</sup>
                        </span>
                    </div>
                    <div className="mb-2">
                        To assist you with your refund request, could you please provide your order ID and proof of purchase.
                    </div>
                    <div className="mb-2">
                        <b>Please note:</b><br />
                        We can only refund orders placed within the last 60 days, and your item must meet our requirements for condition to be returned.
                    </div>
                    <div>
                        Once I’ve checked these details, if everything looks OK, I will send a returns QR code which you can use to post the item back.
                        <sup className="text-blue-700 cursor-pointer ml-1" onClick={e => onArticleClick?.(articles[0], e)}>2</sup>
                    </div>
                    <button className="mt-4 w-full bg-white border border-gray-300 rounded px-3 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0l-3-3m3 3l-3 3" />
                        </svg>
                        Add to composer
                    </button>
                </>
            )
        }
    ];

    const toggleSection = (title) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    return (
        <aside
            className={`
                fixed bottom-0 left-0 right-0 z-30
                sm:static sm:bottom-auto sm:left-auto sm:right-auto
                w-full sm:w-96 md:w-[400px]
                max-h-[70vh] sm:max-h-screen
                bg-white border-t sm:border-t-0 sm:border-l border-gray-200 flex flex-col
                shadow-2xl sm:shadow-none
            `}
            style={{ height: "auto" }}
        >
            {/* Tabs */}
            <div className="flex items-center pt-3 px-3 sm:px-6">
                <button
                    className={`mr-4 sm:mr-6 pb-2 font-semibold border-b-2 transition ${tab === "copilot" ? "text-blue-700 border-blue-700" : "text-gray-500 border-transparent"}`}
                    onClick={() => setTab("copilot")}
                >
                    <span className="mr-2">🧑‍💻</span>AI Copilot
                </button>
                <div className="flex-1 flex items-center">
                    <button
                        className={`pb-2 font-semibold border-b-2 transition ${tab === "details" ? "text-blue-700 border-blue-700" : "text-gray-500 border-transparent"}`}
                        onClick={() => setTab("details")}
                    >
                        Details
                    </button>
                    <div className="flex-1" />
                    <span className="flex items-center space-x-4 -mt-1">
                        <FiExternalLink size={16} />
                        <FaRegRectangleList size={16} />
                    </span>
                </div>
            </div>
            <div className="border-b border-gray-100" />

            <div className="flex-1 overflow-y-auto p-3 sm:p-6 h-full">
                {tab === "copilot" ? (
                    <>
                        {/* Chat */}
                        <div className="mb-6">
                            {chat.map((msg, idx) =>
                                msg.from === "user" ? (
                                    <div key={idx} className="flex items-center mb-3 sm:mb-4">
                                        <img src={msg.avatar} alt="" className="w-8 h-8 rounded-full mr-2 sm:mr-3" />
                                        <div>
                                            <div className="text-xs font-semibold text-gray-700">{msg.name}</div>
                                            <div className="text-gray-800 text-sm sm:text-base">{msg.text}</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={idx} className="flex items-start mb-3 sm:mb-4">
                                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                                            <span className="text-white text-lg font-bold">{"||"}</span>
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-700 mb-1">{msg.name}</div>
                                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 sm:p-4 rounded-xl text-gray-900 shadow-sm relative text-sm sm:text-base">
                                                {msg.text}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Relevant sources */}
                        <div>
                            <div className="text-xs text-gray-500 mb-2">15 relevant sources found</div>
                            <ul>
                                {articles.map((a, i) => (
                                    <li
                                        key={a.id}
                                        className="flex items-center mb-1 cursor-pointer group"
                                        onMouseEnter={e => onArticleClick?.(a, e)}
                                    >
                                        <span className="mr-2">{a.icon}</span>
                                        <span className="text-blue-700 font-medium underline group-hover:underline text-sm sm:text-base">{a.title}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="text-blue-600 text-xs mt-2 hover:underline">See all &rarr;</button>

                            {/* Search Bar */}
                            <div className="mt-4">
                                <form className="relative">
                                    <input
                                        type="text"
                                        placeholder="Ask a follow up question"
                                        className="w-full pl-4 pr-12 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition"
                                        aria-label="Send"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v8m0 0l-4-4m4 4l4-4" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>
                        {/* Assignee and Team */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-500">Assignee</span>
                                <span className="flex items-center gap-2">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Brian Byrne" className="w-6 h-6 rounded-full" />
                                    <span className="text-sm font-medium text-gray-700">Brian Byrne</span>
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">Team</span>
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M3 20h5v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" />
                                    </svg>
                                    <span className="text-sm text-gray-700">Unassigned</span>
                                </span>
                            </div>
                        </div>

                        {/* Expandable Sections */}
                        {detailsSections.map((section) => (
                            <div key={section.title} className="mb-4">
                                <button
                                    className="flex items-center justify-between w-full text-xs text-gray-700 font-semibold py-2 hover:bg-gray-50 rounded transition"
                                    onClick={() => toggleSection(section.title)}
                                >
                                    <span>{section.title}</span>
                                    <svg
                                        className={`w-4 h-4 ml-2 transform transition-transform ${openSections[section.title] ? "rotate-90" : ""}`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                {openSections[section.title] && section.items && (
                                    <ul className="pl-4 mt-2 space-y-2">
                                        {section.items.map((item) => (
                                            <li key={item.label} className="flex items-center justify-between text-sm text-gray-600">
                                                <span className="flex items-center gap-2">
                                                    <span>{item.icon}</span>
                                                    {item.label}
                                                </span>
                                                <button className="w-6 h-6 flex items-center justify-center rounded bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold">
                                                    +
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
}
