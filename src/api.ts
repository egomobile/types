/**
 * This file is part of the @egodigital/types distribution.
 * Copyright (c) e.GO Digital GmbH, Aachen, Germany (https://www.e-go-digital.com/)
 *
 * @egodigital/types is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * @egodigital/types is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * An API result.
 */
export interface ApiResult<TData extends any = any> {
    /**
     * The result data.
     */
    data?: TData;
    /**
     * One or more errors or their keys.
     */
    errors?: string | string[];
    /**
     * Indicates if operation was successful or not.
     */
    success: boolean;
}