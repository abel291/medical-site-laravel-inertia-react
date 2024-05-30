import BannerHead from "@/Components/Banners/BannerHead";
import CardPost from "@/Components/Cards/CardPost";
import DescriptionSection from "@/Components/Sections/DescriptionSection";
import TitleSection from "@/Components/TitleSection";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import React from "react";

const Post = ({ post, postsRecommended }) => {
    return (
        <Layout>
            <Head>
                <title>{post.meta.title}</title>
                <meta
                    head-key="description"
                    name="description"
                    content={post.meta.desc}
                />
            </Head>
            <BannerHead
                date={post.updateDate}
                title={post.title}
                breadcrumb={[
                    {
                        title: "Blog",
                        path: route("blog"),
                    },
                    {
                        title: post.title,
                    },
                ]}
            />
            <div className="py-section container">
                <img
                    className="max-h-[600px] w-full rounded-lg object-cover object-center"
                    src={post.image}
                />
                <DescriptionSection description={post.description} />
                <div className="mt-10 border-t pt-8">
                    <div className="flex flex-wrap gap-3">
                        {post.tags.map((tag) => (
                            <span
                                key={tag.slug}
                                className="rounded-lg bg-primary-700 px-3 py-1.5 text-base font-medium text-white"
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="pb-section container">
                <TitleSection
                    subTitle="ARTÍCULOS RELACIONADOS"
                    title="También te puede gustar estos artículos"
                />
                <div className="mt-title-section grid gap-10  md:grid-cols-2 xl:grid-cols-3">
                    {postsRecommended.map((post) => (
                        <CardPost key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Post;
