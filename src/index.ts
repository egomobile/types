/**
 * This file is part of the @egomobile/types distribution.
 * Copyright (c) Next.e.GO Mobile SE, Aachen, Germany (https://e-go-mobile.com/)
 *
 * @egomobile/types is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * @egomobile/types is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Describes a constructor.
 */
export type Constructor<T extends any = any> = (new (...args: any[]) => T);

/**
 * An object, that can be disposed.
 */
export interface IDisposable {
    /**
     * The logic, which frees all resources.
     */
    dispose(): any;
}

/**
 * A type, that can be (null) or (undefined).
 */
export type Nilable<T extends any = any> = T | null | undefined;

/**
 * A type, that can be (null).
 */
export type Nullable<T extends any = any> = T | null;

/**
 * A type, that can also be (undefined).
 */
export type Optional<T extends any = any> = T | undefined;


export * from './api';
export * from './geo';
export * from './i18';
export * from './npm';
