import { useState } from 'react';
import { MessageCircle, Mail, Phone, X, Send } from 'lucide-react';

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hello! Welcome to wmaruf. How can our customer support team assist your project today?' }
  ]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg;
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputMsg('');

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Thanks for reaching out! A wmaruf support representative will respond shortly. You can also reach our direct WhatsApp hotline at +880 1754 649731.`
        }
      ]);
    }, 800);
  };

  return (
    <>
      {/* Bottom Left Quick Action Buttons */}
      <div className="fixed bottom-4 left-4 z-40 flex flex-col items-center gap-2">
        
        {/* WhatsApp Button with Ping Ring */}
        <a
          href="https://wa.me/8801754649731?text=Hello%20wmaruf%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact wmaruf on WhatsApp"
          className="relative grid h-11 w-11 place-items-center rounded-full bg-emerald-600 text-white shadow-lg transition-transform hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full bg-emerald-500/80 animate-ping opacity-75"></span>
          <Phone className="h-5 w-5 relative z-10" />
        </a>

        {/* Email Shortcut */}
        <a
          href="mailto:support@wmaruf.com"
          aria-label="Email wmaruf support"
          className="grid h-11 w-11 place-items-center rounded-full bg-blue-700 text-white shadow-lg transition-transform hover:scale-110"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>

      {/* Bottom Right Live Support Chat Bubble */}
      <div className="fixed bottom-4 right-4 z-40">
        {!chatOpen ? (
          <button
            type="button"
            onClick={() => setChatOpen(true)}
            aria-label="Open wmaruf support chat"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#24745e] text-white shadow-xl shadow-emerald-900/30 transition-all hover:scale-105 hover:bg-[#1d604e] focus:outline-none"
          >
            <span className="absolute inset-0 rounded-full bg-emerald-400/80 animate-ping opacity-75"></span>
            <MessageCircle className="h-7 w-7 relative z-10" />
          </button>
        ) : (
          <div className="relative w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom duration-200">
            {/* Chat Header */}
            <div className="flex items-center justify-between bg-[#24745e] p-4 text-white">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-bold">
                  W
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold">wmaruf Live Support</h4>
                  <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                    Online • Responds in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="rounded-full p-1 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-slate-50 text-xs">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-blue-700 text-white rounded-br-none'
                        : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-2xs'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendChat} className="flex border-t border-slate-200 p-2 bg-white">
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 text-xs outline-none bg-transparent"
              />
              <button
                type="submit"
                className="grid h-8 w-8 place-items-center rounded-lg bg-[#24745e] text-white hover:bg-[#1d604e] transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
