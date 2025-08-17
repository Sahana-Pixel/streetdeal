import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Truck, ArrowUpRight, ClipboardCheck, Star, AlertTriangle,
  Package, CheckCircle, Clock, MapPin, Calendar
} from "lucide-react";

const SupplierDashboard = () => {
  const [activeTab, setActiveTab] = useState("bids");
  const supplierName = "Supplier";
  const location = "Udupi & Manipal Region";

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
              Hello, {supplierName} <span className="text-blue-400">👋</span>
            </h1>
            <p className="text-lg text-slate-400 mt-2">
              You're supplying in: <span className="text-blue-300">{location}</span>
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Truck size={20} />
              <span>Delivery Hub</span>
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
          icon={<ArrowUpRight className="text-blue-400" size={24} />} 
          title="Bids Submitted" 
          value="24" 
          change="+5 this week" 
        />
        <StatCard 
          icon={<ClipboardCheck className="text-green-400" size={24} />} 
          title="Bids Accepted" 
          value="18" 
          change="75% success" 
        />
        <StatCard 
          icon={<Package className="text-yellow-400" size={24} />} 
          title="Deliveries Pending" 
          value="3" 
          change="2 due today" 
        />
        <StatCard 
          icon={<Star className="text-purple-400" size={24} />} 
          title="Average Rating" 
          value="4.2 ★" 
          change="From 56 reviews" 
        />
      </motion.section>

      {/* 3. Open Vendor Requests */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800 rounded-xl p-6 shadow-2xl mb-6"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Package className="text-blue-400" size={24} />
          Open Vendor Requests
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-700">
                <th className="pb-3">Group Name</th>
                <th className="pb-3">Product</th>
                <th className="pb-3">Quantity</th>
                <th className="pb-3">Location</th>
                <th className="pb-3">Deadline</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, group: "Udupi Veg Collective", product: "Tomatoes", quantity: "100kg", location: "Udupi", deadline: "Tue" },
                { id: 2, group: "Manipal Restaurants", product: "Onions", quantity: "80kg", location: "Manipal", deadline: "Wed" },
                { id: 3, group: "Coastal Hotels", product: "Cabbage", quantity: "50kg", location: "Malpe", deadline: "Thu" }
              ].map(request => (
                <tr key={request.id} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                  <td className="py-4">{request.group}</td>
                  <td>{request.product}</td>
                  <td>{request.quantity}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-blue-400" />
                      {request.location}
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} className="text-blue-400" />
                      {request.deadline}
                    </div>
                  </td>
                  <td>
                    <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg shadow hover:shadow-md transition-all duration-200 text-sm">
                      <ArrowUpRight size={16} />
                      Submit Bid
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* 4. My Bids & 5. Delivery Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* My Bids */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800 rounded-xl p-6 shadow-2xl"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ClipboardCheck className="text-blue-400" size={24} />
              My Bids
            </h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab("bids")}
                className={`px-3 py-1 rounded-lg ${activeTab === "bids" ? "bg-blue-600" : "bg-slate-700"}`}
              >
                Active
              </button>
              <button 
                onClick={() => setActiveTab("history")}
                className={`px-3 py-1 rounded-lg ${activeTab === "history" ? "bg-blue-600" : "bg-slate-700"}`}
              >
                History
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-slate-700 text-sm">
                  <th className="pb-2">Demand</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Price</th>
                  <th className="pb-2">Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, product: "Tomatoes", status: "Pending", price: "₹35/kg", result: "-" },
                  { id: 2, product: "Onions", status: "Accepted", price: "₹32/kg", result: "✔️" },
                  { id: 3, product: "Cabbage", status: "Rejected", price: "₹40/kg", result: "❌" }
                ].map(bid => (
                  <tr key={bid.id} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                    <td className="py-3">{bid.product}</td>
                    <td>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        bid.status === "Accepted" ? "bg-green-900/50 text-green-400" :
                        bid.status === "Rejected" ? "bg-red-900/50 text-red-400" :
                        "bg-yellow-900/50 text-yellow-400"
                      }`}>
                        {bid.status}
                      </span>
                    </td>
                    <td>{bid.price}</td>
                    <td className="text-center">{bid.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Delivery Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800 rounded-xl p-6 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Truck className="text-blue-400" size={24} />
            Upcoming Deliveries
          </h2>
          
          <div className="space-y-4">
            {[
              { 
                id: 1, 
                product: "Tomatoes", 
                quantity: "100kg", 
                address: "Udupi Main Market, Stall #12", 
                deadline: "Today, 2:00 PM",
                status: "pending"
              },
              { 
                id: 2, 
                product: "Onions", 
                quantity: "80kg", 
                address: "Manipal Restaurant Row", 
                deadline: "Tomorrow, 10:00 AM",
                status: "pending"
              }
            ].map(delivery => (
              <div key={delivery.id} className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{delivery.product}</h3>
                    <p className="text-sm text-slate-400">{delivery.quantity}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    delivery.status === "delivered" ? "bg-green-900/50 text-green-400" :
                    "bg-yellow-900/50 text-yellow-400"
                  }`}>
                    {delivery.status === "delivered" ? "Delivered" : "Pending"}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm mb-3">
                  <MapPin size={16} className="text-blue-400" />
                  <span>{delivery.address}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm mb-3">
                  <Clock size={16} className="text-blue-400" />
                  <span>{delivery.deadline}</span>
                </div>
                
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg shadow hover:shadow-md transition-all duration-200">
                  <CheckCircle size={16} />
                  {delivery.status === "delivered" ? "Already Delivered" : "Mark as Delivered"}
                </button>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* 6. Penalty & Warnings */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-slate-800 rounded-xl p-6 shadow-2xl mb-6"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertTriangle className="text-yellow-400" size={24} />
          Account Status
        </h2>
        
        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Performance Notice</h3>
              <p className="text-sm text-slate-400">
                You missed 1 delivery last week. 2 more = temporary suspension.
              </p>
              <p className="text-sm text-slate-400 mt-1">
                ₹100 deposit forfeited for cancellation.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. Ratings & Reviews */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-slate-800 rounded-xl p-6 shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Star className="text-blue-400" size={24} />
          Ratings & Reviews
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-700/50 rounded-lg p-4 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-1">4.2</div>
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => (
                <Star 
                  key={i} 
                  size={16} 
                  className={i <= 4 ? "text-yellow-400 fill-yellow-400" : "text-slate-500"} 
                />
              ))}
            </div>
            <p className="text-sm text-slate-400">56 reviews</p>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h3 className="font-medium mb-2">Recent Feedback</h3>
            <div className="space-y-3">
              {[
                { rating: 5, comment: "Fresh produce, on time delivery" },
                { rating: 4, comment: "Good quality, slightly late" },
                { rating: 3, comment: "Some items were bruised" }
              ].map((review, i) => (
                <div key={i} className="border-b border-slate-700 pb-3 last:border-0">
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(star => (
                      <Star 
                        key={star} 
                        size={14} 
                        className={star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-500"} 
                      />
                    ))}
                  </div>
                  <p className="text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h3 className="font-medium mb-2">Performance Metrics</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Hygiene</span>
                  <span>4.5 ★</span>
                </div>
                <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Reliability</span>
                  <span>4.0 ★</span>
                </div>
                <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Quality</span>
                  <span>4.3 ★</span>
                </div>
                <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: "86%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

const StatCard = ({ 
  icon, 
  title, 
  value, 
  change 
}: { 
  icon: React.ReactNode, 
  title: string, 
  value: string,
  change?: string 
}) => (
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
    <p className="text-2xl font-bold mb-1">{value}</p>
    {change && <p className="text-sm text-slate-500">{change}</p>}
  </motion.div>
);

export default SupplierDashboard;