import { NavigationLink } from '@shared/ui/navigation';

export interface NavigationSection {
    id: string;
    title: string;
    items: NavigationLink[];
}
