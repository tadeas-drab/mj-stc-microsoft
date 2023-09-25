import {
  Dispatch,
  useState,
  useEffect,
  ChangeEvent,
  SetStateAction,
} from 'react';

import {
  ChevronUpIcon,
  ChevronDownIcon,
} from '@fluentui/react-icons-mdl2';

import type { Graduate } from '../../types';
import { Menu, Switch } from '@headlessui/react';
import { useRouter } from 'next/router';

import classNames from 'classnames';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface GraduatesFilterProps {
  setGraduates: Dispatch<SetStateAction<Graduate[]>>;
  graduates: Graduate[];
  years: number[];
}

const GraduatesFilter = ({
  setGraduates,
  graduates,
  years,
}: GraduatesFilterProps) => {
  const router = useRouter();

  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const [ambassador, setAmbassador] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    /**
     * Set current year from the URL hash.
     * @param url The URL shown in the browser.
     */
    const handleHashChange = (url: string) => {
      const year = parseInt(url.split('#rocnik')[1]);

      year && years.includes(year)
        ? setCurrentYear(year)
        : setCurrentYear(null);
    };

    router.events.on('hashChangeStart', handleHashChange);
    handleHashChange(router.asPath); // Initial page load.

    return () => {
      router.events.off('hashChangeStart', handleHashChange);
    };
  });

  useEffect(() => {
    const filteredGraduates = graduates.filter(
      ({ graduateName: name, graduationYear: year, isAmbassador }) => {
        if (search && !name.toLowerCase().includes(search)) return false;
        if (currentYear && year !== currentYear) return false;
        if (ambassador && !isAmbassador) return false;

        return true;
      }
    );

    setGraduates(filteredGraduates); // Re-renders graduates.
  }, [setGraduates, graduates, currentYear, ambassador, search]);

  /**
   * Update search query when the user types in new input.
   * @param e The event that triggered the change.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  /** Reset all filters. */
  const handleReset = () => {
    setCurrentYear(null);
    setAmbassador(false);
    setSearch('');

    const url = router.asPath.split('#')[0];

    router.push(url, url, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <form
      className="mb-5 grid grid-cols-3 items-center gap-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="col-span-3 flex flex-wrap items-center gap-x-6 gap-y-2 lg:col-span-2">
        {/*<Button
          className="w-full py-1 text-left text-sm text-medium-gray decoration-black hover:text-black hover:underline focus-visible:text-black focus-visible:underline active:text-black active:underline md:order-last md:inline-block md:w-auto"
          title="Resetovať všetky filtre"
          onClick={handleReset}
          type="reset"
          as="button"
        >
          Resetovať
        </Button>
        <Switch.Group className="flex select-none items-center" as="div">
          <Switch
            checked={ambassador}
            onChange={setAmbassador}
            className={classNames(
              'relative inline-flex h-[16px] w-[28px] shrink-0 cursor-pointer rounded-full border-2 border-transparent ring-1 transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring-[3px] focus-visible:ring-black focus-visible:ring-opacity-25',
              ambassador ? 'bg-primary' : 'ring-gray'
            )}
          >
            <span className="sr-only">Filtrovať Student Ambassadors</span>
            <span
              aria-hidden={true}
              className={classNames(
                'pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full shadow-lg ring-0 transition duration-150 ease-in-out',
                ambassador
                  ? 'translate-x-3 bg-white'
                  : 'translate-x-0 bg-gray'
              )}
            />
          </Switch>
          <Switch.Label className="ml-2 cursor-pointer text-sm text-black">
            Filtrovať Student Ambassadors
          </Switch.Label>
        </Switch.Group>
        <Menu className="relative" as="div">
          {({ open }) => (
            <>
              <Menu.Button className="text-sm text-black focus:outline-none">
                Ročník{currentYear ? `: ${currentYear}` : ''}
                <Icon
                  icon={open ? ChevronUpIcon : ChevronDownIcon}
                  className="ml-2 text-xs"
                />
              </Menu.Button>
              <Menu.Items className="absolute left-0 z-50 mt-2 origin-top-right divide-y overflow-hidden rounded-md border bg-white shadow-lg focus:outline-none">
                {years.map((year) => (
                  <Menu.Item key={year}>
                    <Button
                      className="block px-3 py-1 text-sm hover:bg-gray focus:outline-none"
                      title={`Zobraziť absolventov z roku ${year}`}
                      href={`#rocnik${year}`}
                      as="link"
                    >
                      {year}
                    </Button>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </>
          )}
                </Menu>*/}
      </div>
      <div className="relative col-span-3 lg:col-span-1">
        <label className="sr-only" htmlFor="searchQuery">
          Hľadať podľa mena absolventa
        </label>
        <input
          className="focus-visible:shadow-outline block w-full rounded-md border border-light-gray px-4 py-2 placeholder-medium-gray focus:outline-none focus-visible:ring-[3px] focus-visible:ring-black focus-visible:ring-opacity-25"
          placeholder="Hľadať študentov"
          onChange={handleChange}
          id="searchQuery"
          type="text"
        />
      </div>
    </form>
  );
};

export default GraduatesFilter;
