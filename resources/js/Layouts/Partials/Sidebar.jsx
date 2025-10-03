import { Avatar, AvatarFallback } from '@/Components/ui/avatar.jsx';
import { cn } from '@/lib/utils.js';
import { Link } from '@inertiajs/react';
import { PiHouse, PiLockKeyOpen, PiSquaresFour, PiUser } from 'react-icons/pi';

export default function Sidebar({ auth, url }) {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-2">
            {/* menu */}
            <li>
              <Link
                href={route('dashboard')}
                className={cn(
                  url.startsWith('/dashboard') ? 'bg-red-500 text-white' : 'text-foreground hover:bg-gray-100',
                  'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                )}
              >
                <PiHouse
                  className={cn(url.startsWith('/dashboard') ? 'text-white' : 'text-foreground', 'h-6 w-6 shrink-0')}
                />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className={cn(
                  url.startsWith('/user') ? 'bg-red-500 text-white' : 'text-foreground hover:bg-gray-100',
                  'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                )}
              >
                <PiUser
                  className={cn(url.startsWith('/user') ? 'text-white' : 'text-foreground', 'h-6 w-6 shrink-0')}
                />
                People
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className={cn(
                  url.startsWith('/my-tasks') ? 'bg-red-500 text-white' : 'text-foreground hover:bg-gray-100',
                  'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                )}
              >
                <PiSquaresFour
                  className={cn(url.startsWith('/my-tasks') ? 'text-white' : 'text-foreground', 'h-6 w-6 shrink-0')}
                />
                My Tasks
              </Link>
            </li>
            <li>
              <Link
                href={route('logout')}
                method={'post'}
                as={'button'}
                className={cn(
                  url.startsWith('/logout') ? 'bg-red-500 text-white' : 'text-foreground hover:bg-gray-100',
                  'group flex w-full gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed',
                )}
              >
                <PiLockKeyOpen
                  className={cn(url.startsWith('/logout') ? 'text-white' : 'text-foreground', 'h-6 w-6 shrink-0')}
                />
                Logout
              </Link>
            </li>
          </ul>
        </li>
        <li></li>
        <li className="-mx-6 mt-auto">
          {/* profile */}
          <Link
            href={'#'}
            className={
              'flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-relaxed text-foreground hover:bg-gray-100'
            }
          >
            <Avatar>
              <AvatarFallback>X</AvatarFallback>
            </Avatar>
            <span>{auth.name}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
