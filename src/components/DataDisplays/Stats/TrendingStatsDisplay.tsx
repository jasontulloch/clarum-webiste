import React from 'react';
// Tailwind
import { classNames } from "@/utils/tailwind/classNames"
import { TrendingStatsProps } from '@/types/institutionalInvestors/analytics';

interface TrendingStatsDisplayProps {
  stats: TrendingStatsProps[]
}

const TrendingStatsDisplay = ({ stats }: TrendingStatsDisplayProps) => {
    return (
      <dl className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
        {stats?.map((stat) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-lg bg-gray-900 px-4 py-5 shadow sm:p-6"
          >
            <dt className="text-sm font-medium leading-6 text-gray-300">{stat.name}</dt>
            <dd
              className={classNames(
                stat.changeType === 'negative' ? 'text-rose-600' : 'text-green-700',
                'text-xs font-medium',
              )}
            >
              {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-white">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    )
}

export default TrendingStatsDisplay;
  