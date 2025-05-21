import React from "react";

export default function ArticlePopover({ article, onAddToComposer, onClose, style = {} }) {
    return (
        <div
            className="
                bg-white rounded-xl shadow-xl border border-gray-200
                w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                p-3 sm:p-4 md:p-5
                transition-all duration-300
            "
            style={style}
            onMouseLeave={onClose}
        >
            <div className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1">{article.title}</div>
            <div className="text-xs sm:text-sm text-gray-500 mb-2">
                {article.type} • {article.author} • {article.date}
            </div>
            <div className="text-gray-700 text-sm sm:text-base mb-4">{article.content}</div>
            <button
                className="
                    w-full bg-white border border-gray-300 rounded
                    px-3 py-2 flex items-center justify-center gap-2 text-gray-700
                    hover:bg-gray-50 text-sm sm:text-base transition
                "
                onClick={() => onAddToComposer(article)}
            >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8m0 0l-3-3m3 3l-3 3" />
                </svg>
                Add to composer
            </button>
        </div>
    );
}
