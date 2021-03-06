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
 * Describes a 'package.json'.
 */
export interface IPackageJSON {
    /**
     * The author of the package.
     */
    author?: string;
    /**
     * Required dependencies.
     */
    dependencies?: {
        /**
         * Module name: version
         */
        [name: string]: string;
    },
    /**
     * A description.
     */
    description?: string;
    /**
     * Dependencies for development.
     */
    devDependencies?: {
        /**
         * Module name: version
         */
        [name: string]: string;
    },
    /**
     * One or more (search) keywords.
     */
    keywords?: string[];
    /**
     * The main script / application.
     */
    main?: string;
    /**
     * The (internal) name of the package.
     */
    name: string;
    /**
     * Indicates if package is provate or not.
     */
    'private'?: boolean;
    /**
     * A list of one or more scripts.
     */
    scripts?: {
        /**
         * Other scripts.
         */
        [name: string]: string;
    };
    /**
     * The version.
     */
    version: string;
}
