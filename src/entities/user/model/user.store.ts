import { Injectable, signal } from '@angular/core';

import { AuthResponse } from './user.types';

@Injectable({ providedIn: 'root' })
export class UserStore {
    readonly currentUser = signal<AuthResponse | null>(null);

    setUser(user: AuthResponse | null): void {
        this.currentUser.set(user);
    }
}
