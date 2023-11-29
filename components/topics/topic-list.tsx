import { Chip, divider } from '@nextui-org/react'
import Link from 'next/link'
import { db } from '@/db';
import paths from '@/paths'

import React, { Suspense } from 'react'

export default async function TopicList() {
    const topics = await db.topic.findMany();
    const renderedTopics = topics.map(topic => {
        return (
            <div key={topic.id}>
                <Suspense fallback={<div>Loading....</div>} >
                    <Link href={paths.topicShow(topic.slug)}>
                        <Chip color='warning' variant="shadow">
                            {topic.slug}
                        </Chip>                    
                    </Link> 
                </Suspense>                
            </div>
        )
    });

      
  return (
    <div className='flex flex-row flex-wrap gap-2'>
        {
            renderedTopics
        }
    </div>
   
    
  )
}
