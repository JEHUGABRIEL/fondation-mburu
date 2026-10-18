"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Post = {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  publishedAt: string;
  date: string;
};

/**
 * Row of tall news tiles: the active one widens to reveal its text.
 * Hover or focus activates a tile; on touch, the first tap does.
 */
export function NewsRail({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="lt-rail">
      {posts.map((post, index) => (
        <article
          key={post.id}
          className={`lt-rail-item${index === active ? " is-active" : ""}`}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        >
          <div className="lt-rail-media">
            <Image src={post.image} alt="" fill sizes="(max-width: 760px) 92vw, 30vw" className="cover" />
          </div>
          <div className="lt-rail-body">
            <div className="lt-rail-text">
              <span className="mb-tag">{post.category}</span>
              <h3>{post.title}</h3>
              <time dateTime={post.publishedAt}>{post.date}</time>
              <Link href={`/actualites/${post.slug}`} className="btn btn-outline">
                Découvrir
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
