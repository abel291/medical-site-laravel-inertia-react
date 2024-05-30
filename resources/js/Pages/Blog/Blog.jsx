import { Head } from "@inertiajs/react";
import React from "react";

import BannerHead from "@/Components/Banners/BannerHead";
import CardPost from "@/Components/Cards/CardPost";
import Layout from "@/Layouts/Layout";
import WidgetPostSearch from "./InputSearchPost";
import InputSearchPost from "./InputSearchPost";

const Blog = ({ page, posts }) => {
    return (
        <Layout>
            <Head>
                <title>{page.title}</title>
                <meta
                    head-key="description"
                    name="description"
                    content={page.description}
                />
            </Head>
            <BannerHead
                title={page.title}
                breadcrumb={[
                    {
                        title: page.title,
                    },
                ]}
            />
            <div className="py-section container">
                <div className="mb-4">
                    <InputSearchPost />
                </div>
                <div className="grid grid-cols-1 gap-8  md:grid-cols-2 xl:grid-cols-3">
                    {posts.map((post) => (
                        <CardPost key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
