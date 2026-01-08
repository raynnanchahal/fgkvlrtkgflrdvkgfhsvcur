import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import { Helmet } from "react-helmet-async";

interface Reel {
  id: string;
  wistia_id: string;
}

export default function Moments() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setReels([
      { id: "1", wistia_id: "WISTIA_ID_1" },
      { id: "2", wistia_id: "WISTIA_ID_2" },
      { id: "3", wistia_id: "WISTIA_ID_3" }
    ]);
    setLoading(false);
  }, []);

  return (
    <>
      <Helmet>
        <title>Moments</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-black text-white">
        <header className="border-b border-white/10 p-4 flex items-center gap-3">
          <Link to="/" className="opacity-80 hover:opacity-100">
            <ArrowLeft />
          </Link>
          <h1 className="text-lg font-semibold">Moments</h1>
        </header>

        <main className="p-6">
          {loading ? (
            <p>Loading…</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reels.map((r) => (
                <div key={r.id} className="rounded-xl overflow-hidden">
                  <WistiaPlayer mediaId={r.wistia_id} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
