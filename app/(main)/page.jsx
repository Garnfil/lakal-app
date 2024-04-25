import { FeedFilterForm } from "@/components/FeedFilterForm";
import { OpenToBuyPostCard } from "@/components/OpenToBuyPostCard";
import { StockToSellPostCard } from "@/components/StockToSellPostCard";
import { verifySession } from "@/lib/dal";
import { getSession } from "@/lib/session";
import { Store } from "lucide-react";

async function getPosts(activeRole) {
    let url = activeRole === "supplier" ? `http://127.0.0.1:5000/api/posts/open-to-buy` : `http://127.0.0.1:5000/api/posts/stock-to-sell`;
    let response = await fetch(url);
    return  await response.json();
    
}

export default async function HomePage() {
    const session = await verifySession();
    const activeRole = session.activeRole;
    const posts = await getPosts(activeRole);

    return (
        <div className="h-auto">
            <div className="feed-container my-5">
                <h2 className="text-2xl font-bold mb-5 flex gap-2 items-center">
                    <Store size={20} /> Market Place
                </h2>
                <div className="flex items-start gap-5">
                    <FeedFilterForm />
                    <div className="flex flex-col gap-3 w-full">
                        {posts.length > 0 && posts.map((post) =>
                            activeRole == "supplier" ? <OpenToBuyPostCard key={post.postId} post={post} /> : <StockToSellPostCard key={post.postId} post={post} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
