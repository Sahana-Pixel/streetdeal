import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Package, DollarSign, Users, Calendar, Edit, MessageSquare, 
  Bell, Plus, Clipboard 
} from "lucide-react";

const VendorDashboard = () => {
  const [inGroup, setInGroup] = useState(false);
  const vendorName = "Vendor";
  const areaName = "Downtown Market";
  const nextDeliveryDay = "Tuesday";

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 p-20">
      {/* 1. Welcome Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800 rounded-xl p-6 shadow-2xl mb-6"
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">
              Hello, {vendorName} <span className="text-blue-400">👋</span>
            </h1>
            <p className="text-lg text-slate-400 mt-2">
              You're operating in: <span className="text-blue-300">{areaName}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageSquare size={20} />
              <span>Support</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* 2. Overview Cards */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6"
      >
        <StatCard 
          icon={<Package className="text-blue-400" size={24} />} 
          title="Total Orders" 
          value="142" 
        />
        <StatCard 
          icon={<DollarSign className="text-green-400" size={24} />} 
          title="This Month" 
          value="₹5000" 
        />
        <StatCard 
          icon={<Users className="text-purple-400" size={24} />} 
          title="Group Status" 
          value={inGroup ? "Joined" : "Not Joined"} 
        />
        <StatCard 
          icon={<Calendar className="text-yellow-400" size={24} />} 
          title="Next Delivery" 
          value={nextDeliveryDay} 
        />
      </motion.section>

      {/* 3. Vendor Group Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800 rounded-xl p-6 shadow-2xl mb-6"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Users className="text-blue-400" size={24} />
          Vendor Group
        </h2>
        
        {inGroup ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Fresh Produce Collective</h3>
                <p className="text-slate-400">Downtown Market Area</p>
              </div>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Edit size={18} />
                <span>Edit Group</span>
              </button>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Members (5)</h4>
              <ul className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {["John's Produce", "Maria's Farm", "Urban Greens", "FreshCo", "Market Garden"].map(member => (
                  <li key={member} className="bg-slate-600/30 rounded px-3 py-2 text-sm">
                    {member}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Current Group Order</h4>
              <p>We need 100kg tomatoes, 50kg onions every Tuesday</p>
              <button className="mt-3 flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-slate-700 px-4 py-2 rounded-lg transition-all duration-300">
                <Clipboard size={18} />
                <span>Edit Group Order</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-slate-400 mb-6">You're not currently part of a vendor group</p>
            <button 
              onClick={() => setInGroup(true)}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl mx-auto transition-all duration-300"
            >
              <Plus size={20} />
              <span>Create or Join a Group</span>
            </button>
          </div>
        )}
      </motion.section>

      {/* 4. Order Management */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-slate-800 rounded-xl p-6 shadow-2xl mb-6"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Package className="text-blue-400" size={24} />
          Order Management
        </h2>
        
        <div className="space-y-4">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Current Group Order Status</h3>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                Waiting for supplier bids...
              </span>
            </div>
            <p className="text-slate-400 mb-4">3 suppliers have viewed your order</p>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Clipboard size={18} />
              <span>View Bids (2)</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* 5. Communication & 6. Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800 rounded-xl p-6 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <MessageSquare className="text-blue-400" size={24} />
            Group Chat
          </h2>
          <div className="bg-slate-700/50 rounded-lg p-4 h-64 overflow-y-auto">
            {[1, 2, 3].map(msg => (
              <div key={msg} className="mb-3 last:mb-0">
                <div className="flex justify-between text-sm text-slate-400 mb-1">
                  <span>Maria's Farm</span>
                  <span>10:30 AM</span>
                </div>
                <p className="bg-slate-600/30 rounded-lg p-3">Can we increase the tomato order by 20kg?</p>
              </div>
            ))}
            <div className="flex gap-2 mt-4">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Send
              </button>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800 rounded-xl p-6 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Bell className="text-blue-400" size={24} />
            Notifications
          </h2>
          <div className="space-y-3">
            {[
              { id: 1, text: "Supplier cancelled. New bid accepted.", type: "alert" },
              { id: 2, text: "Order delivered successfully.", type: "success" },
              { id: 3, text: "Supplier no-show reported.", type: "warning" },
              { id: 4, text: "New message from FreshCo", type: "info" }
            ].map(notification => (
              <div 
                key={notification.id} 
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  notification.type === "alert" ? "bg-red-900/30" :
                  notification.type === "success" ? "bg-green-900/30" :
                  notification.type === "warning" ? "bg-yellow-900/30" :
                  "bg-blue-900/30"
                }`}
              >
                <Bell size={18} className="mt-0.5 flex-shrink-0" />
                <p>{notification.text}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-slate-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-slate-700/50 rounded-lg">
        {icon}
      </div>
      <h3 className="text-slate-400">{title}</h3>
    </div>
    <p className="text-2xl font-bold">{value}</p>
  </motion.div>
);

export default VendorDashboard;