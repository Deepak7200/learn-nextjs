type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const languages: string[] = ["cpp","c++","python","javascript","java"];

  if (languages.includes(slug)) {
    return <div>{`Hello: ${slug}`}</div>;
  }

  return <div>Page not found</div>;
}