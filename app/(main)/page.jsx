import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button"
import { FeedFilterForm } from "@/components/FeedFilterForm";
import { OpenToBuyPostCard } from "@/components/OpenToBuyPostCard";
import { StockToSellPostCard } from "@/components/StockToSellPostCard";
import { Store } from "lucide-react";

async function getPosts(userActiveRole) {
  let url = userActiveRole === 'supplier' ? `http://127.0.0.1:5000/api/posts/open-to-buy` : `http://127.0.0.1:5000/api/posts/stock-to-sell`;
  let response = await fetch(url);
  return await response.json();
}

export default async function Home() {
  const userActiveRole = "supplier";
  
  let posts = await getPosts(userActiveRole);
  return (
    <div className="h-auto">
      <div className="feed-container my-5">
        <h2 className="text-2xl font-bold mb-5 flex gap-2 items-center"><Store size={20} /> Market Place</h2>
        <div className="flex items-start gap-5">
          <FeedFilterForm />
          <div className="flex flex-col gap-3 w-full">
            {
              posts.map((post) => (
                userActiveRole == 'supplier' ? (
                  <OpenToBuyPostCard post={post} />
                ) : (
                  <StockToSellPostCard post={post} />
                )
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
