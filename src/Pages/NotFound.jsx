import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero";
import useSeo from "../hooks/useSeo";

export default function NotFound() {
  useSeo({ title: "Page not found" });
  return (
    <PageHero eyebrow="404" title="This page took a" highlight="wrong turn." subtitle="The page you're looking for doesn't exist or has moved.">
      <div className="mt-10 flex gap-4">
        <Link to="/" className="btn-primary">Go home</Link>
        <Link to="/contact" className="btn-ghost">Contact us</Link>
      </div>
    </PageHero>
  );
}
