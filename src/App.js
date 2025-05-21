import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ConversationList from "./components/ConversationList";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import Composer from "./components/Composer";
import CopilotPanel from "./components/CopilotPanel";
import ArticlePopover from "./components/ArticlePopover";
import conversations from "./data/conversations.json";
import messagesData from "./data/messages.json";
import articles from "./data/articles.json";

export default function App() {
  const [selectedConvId, setSelectedConvId] = useState(conversations[0].id);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverArticle, setPopoverArticle] = useState(null);
  const [popoverPos, setPopoverPos] = useState({ x: 0, y: 0 });

  const selectedConversation = conversations.find(c => c.id === selectedConvId);
  const messages = messagesData[selectedConvId] || [];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar>
        <ConversationList
          selectedId={selectedConvId}
          onSelect={setSelectedConvId}
        />
      </Sidebar>
      <main className="flex flex-col flex-1 min-w-0">
        <Header conversation={selectedConversation} />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-col flex-1 min-w-0">
            <ChatWindow messages={messages} />
            <Composer />
          </div>
          <CopilotPanel
            articles={articles}
            onArticleClick={(article, e) => {
              const rect = e.target.getBoundingClientRect();
              setPopoverArticle(article);
              setPopoverPos({ x: rect.right, y: rect.top });
              setShowPopover(true);
            }}
          />
        </div>
      </main>
      {showPopover && popoverArticle && (
        <ArticlePopover
          article={popoverArticle}
          onAddToComposer={() => setShowPopover(false)}
          onClose={() => setShowPopover(false)}
          style={{
            position: "fixed",
            top: popoverPos.y + 10,
            left: popoverPos.x - 350,
            zIndex: 50,
          }}
        />
      )}
    </div>
  );
}
