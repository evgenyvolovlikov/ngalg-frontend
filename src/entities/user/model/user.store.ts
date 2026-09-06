import { Injectable, signal } from '@angular/core';

import { AuthResponse, Profile } from './user.types';

@Injectable({ providedIn: 'root' })
export class UserStore {
    readonly currentAuthUser = signal<AuthResponse | null>(null);
    readonly currentProfile = signal<Profile | null>(null);

    setAuthUser(user: AuthResponse | null): void {
        this.currentAuthUser.set(user);
    }

    setProfile(profile: Profile | null): void {
        this.currentProfile.set(profile);
    }
}
