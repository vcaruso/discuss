import PostList from '@/components/posts/post-list';
import { fetchBySearchTerm } from '@/db/queries/posts';
import { redirect } from 'next/navigation';
import React from 'react'

type SearchPageProps = {
  searchParams: {
    term: string
  }
}

export default async function SearchPage( { searchParams }: SearchPageProps) {
  const { term } = searchParams;
  if(!term){
    redirect('/');
  }
  
  return (
    <div>
      <PostList fetchData={()=>fetchBySearchTerm(term)} />
    </div>
  )
}
