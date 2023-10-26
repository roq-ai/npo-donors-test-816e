/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model application_status
 *
 */
export type application_status = $Result.DefaultSelection<Prisma.$application_statusPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model donor_profile
 *
 */
export type donor_profile = $Result.DefaultSelection<Prisma.$donor_profilePayload>;
/**
 * Model donorship_application
 *
 */
export type donorship_application = $Result.DefaultSelection<Prisma.$donorship_applicationPayload>;
/**
 * Model non_profit_organization
 *
 */
export type non_profit_organization = $Result.DefaultSelection<Prisma.$non_profit_organizationPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Application_statuses
 * const application_statuses = await prisma.application_status.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Application_statuses
   * const application_statuses = await prisma.application_status.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.application_status`: Exposes CRUD operations for the **application_status** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Application_statuses
   * const application_statuses = await prisma.application_status.findMany()
   * ```
   */
  get application_status(): Prisma.application_statusDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.donor_profile`: Exposes CRUD operations for the **donor_profile** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Donor_profiles
   * const donor_profiles = await prisma.donor_profile.findMany()
   * ```
   */
  get donor_profile(): Prisma.donor_profileDelegate<ExtArgs>;

  /**
   * `prisma.donorship_application`: Exposes CRUD operations for the **donorship_application** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Donorship_applications
   * const donorship_applications = await prisma.donorship_application.findMany()
   * ```
   */
  get donorship_application(): Prisma.donorship_applicationDelegate<ExtArgs>;

  /**
   * `prisma.non_profit_organization`: Exposes CRUD operations for the **non_profit_organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Non_profit_organizations
   * const non_profit_organizations = await prisma.non_profit_organization.findMany()
   * ```
   */
  get non_profit_organization(): Prisma.non_profit_organizationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    application_status: 'application_status';
    company: 'company';
    donor_profile: 'donor_profile';
    donorship_application: 'donorship_application';
    non_profit_organization: 'non_profit_organization';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps:
        | 'application_status'
        | 'company'
        | 'donor_profile'
        | 'donorship_application'
        | 'non_profit_organization'
        | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      application_status: {
        payload: Prisma.$application_statusPayload<ExtArgs>;
        fields: Prisma.application_statusFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.application_statusFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.application_statusFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload>;
          };
          findFirst: {
            args: Prisma.application_statusFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.application_statusFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload>;
          };
          findMany: {
            args: Prisma.application_statusFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload>[];
          };
          create: {
            args: Prisma.application_statusCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload>;
          };
          createMany: {
            args: Prisma.application_statusCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.application_statusDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload>;
          };
          update: {
            args: Prisma.application_statusUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload>;
          };
          deleteMany: {
            args: Prisma.application_statusDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.application_statusUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.application_statusUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$application_statusPayload>;
          };
          aggregate: {
            args: Prisma.Application_statusAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplication_status>;
          };
          groupBy: {
            args: Prisma.application_statusGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Application_statusGroupByOutputType>[];
          };
          count: {
            args: Prisma.application_statusCountArgs<ExtArgs>;
            result: $Utils.Optional<Application_statusCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      donor_profile: {
        payload: Prisma.$donor_profilePayload<ExtArgs>;
        fields: Prisma.donor_profileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.donor_profileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.donor_profileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload>;
          };
          findFirst: {
            args: Prisma.donor_profileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.donor_profileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload>;
          };
          findMany: {
            args: Prisma.donor_profileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload>[];
          };
          create: {
            args: Prisma.donor_profileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload>;
          };
          createMany: {
            args: Prisma.donor_profileCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.donor_profileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload>;
          };
          update: {
            args: Prisma.donor_profileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload>;
          };
          deleteMany: {
            args: Prisma.donor_profileDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.donor_profileUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.donor_profileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donor_profilePayload>;
          };
          aggregate: {
            args: Prisma.Donor_profileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDonor_profile>;
          };
          groupBy: {
            args: Prisma.donor_profileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Donor_profileGroupByOutputType>[];
          };
          count: {
            args: Prisma.donor_profileCountArgs<ExtArgs>;
            result: $Utils.Optional<Donor_profileCountAggregateOutputType> | number;
          };
        };
      };
      donorship_application: {
        payload: Prisma.$donorship_applicationPayload<ExtArgs>;
        fields: Prisma.donorship_applicationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.donorship_applicationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.donorship_applicationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload>;
          };
          findFirst: {
            args: Prisma.donorship_applicationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.donorship_applicationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload>;
          };
          findMany: {
            args: Prisma.donorship_applicationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload>[];
          };
          create: {
            args: Prisma.donorship_applicationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload>;
          };
          createMany: {
            args: Prisma.donorship_applicationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.donorship_applicationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload>;
          };
          update: {
            args: Prisma.donorship_applicationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload>;
          };
          deleteMany: {
            args: Prisma.donorship_applicationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.donorship_applicationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.donorship_applicationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$donorship_applicationPayload>;
          };
          aggregate: {
            args: Prisma.Donorship_applicationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDonorship_application>;
          };
          groupBy: {
            args: Prisma.donorship_applicationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Donorship_applicationGroupByOutputType>[];
          };
          count: {
            args: Prisma.donorship_applicationCountArgs<ExtArgs>;
            result: $Utils.Optional<Donorship_applicationCountAggregateOutputType> | number;
          };
        };
      };
      non_profit_organization: {
        payload: Prisma.$non_profit_organizationPayload<ExtArgs>;
        fields: Prisma.non_profit_organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.non_profit_organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.non_profit_organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload>;
          };
          findFirst: {
            args: Prisma.non_profit_organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.non_profit_organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload>;
          };
          findMany: {
            args: Prisma.non_profit_organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload>[];
          };
          create: {
            args: Prisma.non_profit_organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload>;
          };
          createMany: {
            args: Prisma.non_profit_organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.non_profit_organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload>;
          };
          update: {
            args: Prisma.non_profit_organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload>;
          };
          deleteMany: {
            args: Prisma.non_profit_organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.non_profit_organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.non_profit_organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$non_profit_organizationPayload>;
          };
          aggregate: {
            args: Prisma.Non_profit_organizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateNon_profit_organization>;
          };
          groupBy: {
            args: Prisma.non_profit_organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Non_profit_organizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.non_profit_organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<Non_profit_organizationCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type Donor_profileCountOutputType
   */

  export type Donor_profileCountOutputType = {
    donorship_application: number;
  };

  export type Donor_profileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donorship_application?: boolean | Donor_profileCountOutputTypeCountDonorship_applicationArgs;
  };

  // Custom InputTypes

  /**
   * Donor_profileCountOutputType without action
   */
  export type Donor_profileCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Donor_profileCountOutputType
     */
    select?: Donor_profileCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Donor_profileCountOutputType without action
   */
  export type Donor_profileCountOutputTypeCountDonorship_applicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: donorship_applicationWhereInput;
  };

  /**
   * Count Type Non_profit_organizationCountOutputType
   */

  export type Non_profit_organizationCountOutputType = {
    donorship_application: number;
  };

  export type Non_profit_organizationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    donorship_application?: boolean | Non_profit_organizationCountOutputTypeCountDonorship_applicationArgs;
  };

  // Custom InputTypes

  /**
   * Non_profit_organizationCountOutputType without action
   */
  export type Non_profit_organizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Non_profit_organizationCountOutputType
     */
    select?: Non_profit_organizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Non_profit_organizationCountOutputType without action
   */
  export type Non_profit_organizationCountOutputTypeCountDonorship_applicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: donorship_applicationWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
    donor_profile: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    donor_profile?: boolean | UserCountOutputTypeCountDonor_profileArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonor_profileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: donor_profileWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model application_status
   */

  export type AggregateApplication_status = {
    _count: Application_statusCountAggregateOutputType | null;
    _min: Application_statusMinAggregateOutputType | null;
    _max: Application_statusMaxAggregateOutputType | null;
  };

  export type Application_statusMinAggregateOutputType = {
    id: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Application_statusMaxAggregateOutputType = {
    id: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Application_statusCountAggregateOutputType = {
    id: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Application_statusMinAggregateInputType = {
    id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Application_statusMaxAggregateInputType = {
    id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Application_statusCountAggregateInputType = {
    id?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Application_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which application_status to aggregate.
     */
    where?: application_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of application_statuses to fetch.
     */
    orderBy?: application_statusOrderByWithRelationInput | application_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: application_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` application_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` application_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned application_statuses
     **/
    _count?: true | Application_statusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Application_statusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Application_statusMaxAggregateInputType;
  };

  export type GetApplication_statusAggregateType<T extends Application_statusAggregateArgs> = {
    [P in keyof T & keyof AggregateApplication_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication_status[P]>
      : GetScalarType<T[P], AggregateApplication_status[P]>;
  };

  export type application_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: application_statusWhereInput;
    orderBy?: application_statusOrderByWithAggregationInput | application_statusOrderByWithAggregationInput[];
    by: Application_statusScalarFieldEnum[] | Application_statusScalarFieldEnum;
    having?: application_statusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Application_statusCountAggregateInputType | true;
    _min?: Application_statusMinAggregateInputType;
    _max?: Application_statusMaxAggregateInputType;
  };

  export type Application_statusGroupByOutputType = {
    id: string;
    status: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Application_statusCountAggregateOutputType | null;
    _min: Application_statusMinAggregateOutputType | null;
    _max: Application_statusMaxAggregateOutputType | null;
  };

  type GetApplication_statusGroupByPayload<T extends application_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Application_statusGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Application_statusGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Application_statusGroupByOutputType[P]>
          : GetScalarType<T[P], Application_statusGroupByOutputType[P]>;
      }
    >
  >;

  export type application_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['application_status']
    >;

  export type application_statusSelectScalar = {
    id?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $application_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'application_status';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        status: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['application_status']
    >;
    composites: {};
  };

  type application_statusGetPayload<S extends boolean | null | undefined | application_statusDefaultArgs> =
    $Result.GetResult<Prisma.$application_statusPayload, S>;

  type application_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    application_statusFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Application_statusCountAggregateInputType | true;
  };

  export interface application_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['application_status'];
      meta: { name: 'application_status' };
    };
    /**
     * Find zero or one Application_status that matches the filter.
     * @param {application_statusFindUniqueArgs} args - Arguments to find a Application_status
     * @example
     * // Get one Application_status
     * const application_status = await prisma.application_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends application_statusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, application_statusFindUniqueArgs<ExtArgs>>,
    ): Prisma__application_statusClient<
      $Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Application_status that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {application_statusFindUniqueOrThrowArgs} args - Arguments to find a Application_status
     * @example
     * // Get one Application_status
     * const application_status = await prisma.application_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends application_statusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, application_statusFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__application_statusClient<
      $Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Application_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {application_statusFindFirstArgs} args - Arguments to find a Application_status
     * @example
     * // Get one Application_status
     * const application_status = await prisma.application_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends application_statusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, application_statusFindFirstArgs<ExtArgs>>,
    ): Prisma__application_statusClient<
      $Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Application_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {application_statusFindFirstOrThrowArgs} args - Arguments to find a Application_status
     * @example
     * // Get one Application_status
     * const application_status = await prisma.application_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends application_statusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, application_statusFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__application_statusClient<
      $Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Application_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {application_statusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Application_statuses
     * const application_statuses = await prisma.application_status.findMany()
     *
     * // Get first 10 Application_statuses
     * const application_statuses = await prisma.application_status.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const application_statusWithIdOnly = await prisma.application_status.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends application_statusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, application_statusFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Application_status.
     * @param {application_statusCreateArgs} args - Arguments to create a Application_status.
     * @example
     * // Create one Application_status
     * const Application_status = await prisma.application_status.create({
     *   data: {
     *     // ... data to create a Application_status
     *   }
     * })
     *
     **/
    create<T extends application_statusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, application_statusCreateArgs<ExtArgs>>,
    ): Prisma__application_statusClient<
      $Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Application_statuses.
     *     @param {application_statusCreateManyArgs} args - Arguments to create many Application_statuses.
     *     @example
     *     // Create many Application_statuses
     *     const application_status = await prisma.application_status.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends application_statusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, application_statusCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Application_status.
     * @param {application_statusDeleteArgs} args - Arguments to delete one Application_status.
     * @example
     * // Delete one Application_status
     * const Application_status = await prisma.application_status.delete({
     *   where: {
     *     // ... filter to delete one Application_status
     *   }
     * })
     *
     **/
    delete<T extends application_statusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, application_statusDeleteArgs<ExtArgs>>,
    ): Prisma__application_statusClient<
      $Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Application_status.
     * @param {application_statusUpdateArgs} args - Arguments to update one Application_status.
     * @example
     * // Update one Application_status
     * const application_status = await prisma.application_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends application_statusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, application_statusUpdateArgs<ExtArgs>>,
    ): Prisma__application_statusClient<
      $Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Application_statuses.
     * @param {application_statusDeleteManyArgs} args - Arguments to filter Application_statuses to delete.
     * @example
     * // Delete a few Application_statuses
     * const { count } = await prisma.application_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends application_statusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, application_statusDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Application_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {application_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Application_statuses
     * const application_status = await prisma.application_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends application_statusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, application_statusUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Application_status.
     * @param {application_statusUpsertArgs} args - Arguments to update or create a Application_status.
     * @example
     * // Update or create a Application_status
     * const application_status = await prisma.application_status.upsert({
     *   create: {
     *     // ... data to create a Application_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application_status we want to update
     *   }
     * })
     **/
    upsert<T extends application_statusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, application_statusUpsertArgs<ExtArgs>>,
    ): Prisma__application_statusClient<
      $Result.GetResult<Prisma.$application_statusPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Application_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {application_statusCountArgs} args - Arguments to filter Application_statuses to count.
     * @example
     * // Count the number of Application_statuses
     * const count = await prisma.application_status.count({
     *   where: {
     *     // ... the filter for the Application_statuses we want to count
     *   }
     * })
     **/
    count<T extends application_statusCountArgs>(
      args?: Subset<T, application_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Application_statusCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Application_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Application_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Application_statusAggregateArgs>(
      args: Subset<T, Application_statusAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplication_statusAggregateType<T>>;

    /**
     * Group by Application_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {application_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends application_statusGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: application_statusGroupByArgs['orderBy'] }
        : { orderBy?: application_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, application_statusGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetApplication_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the application_status model
     */
    readonly fields: application_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for application_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__application_statusClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the application_status model
   */
  interface application_statusFieldRefs {
    readonly id: FieldRef<'application_status', 'String'>;
    readonly status: FieldRef<'application_status', 'String'>;
    readonly created_at: FieldRef<'application_status', 'DateTime'>;
    readonly updated_at: FieldRef<'application_status', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * application_status findUnique
   */
  export type application_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * Filter, which application_status to fetch.
     */
    where: application_statusWhereUniqueInput;
  };

  /**
   * application_status findUniqueOrThrow
   */
  export type application_statusFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * Filter, which application_status to fetch.
     */
    where: application_statusWhereUniqueInput;
  };

  /**
   * application_status findFirst
   */
  export type application_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * Filter, which application_status to fetch.
     */
    where?: application_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of application_statuses to fetch.
     */
    orderBy?: application_statusOrderByWithRelationInput | application_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for application_statuses.
     */
    cursor?: application_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` application_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` application_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of application_statuses.
     */
    distinct?: Application_statusScalarFieldEnum | Application_statusScalarFieldEnum[];
  };

  /**
   * application_status findFirstOrThrow
   */
  export type application_statusFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * Filter, which application_status to fetch.
     */
    where?: application_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of application_statuses to fetch.
     */
    orderBy?: application_statusOrderByWithRelationInput | application_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for application_statuses.
     */
    cursor?: application_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` application_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` application_statuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of application_statuses.
     */
    distinct?: Application_statusScalarFieldEnum | Application_statusScalarFieldEnum[];
  };

  /**
   * application_status findMany
   */
  export type application_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * Filter, which application_statuses to fetch.
     */
    where?: application_statusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of application_statuses to fetch.
     */
    orderBy?: application_statusOrderByWithRelationInput | application_statusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing application_statuses.
     */
    cursor?: application_statusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` application_statuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` application_statuses.
     */
    skip?: number;
    distinct?: Application_statusScalarFieldEnum | Application_statusScalarFieldEnum[];
  };

  /**
   * application_status create
   */
  export type application_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * The data needed to create a application_status.
     */
    data?: XOR<application_statusCreateInput, application_statusUncheckedCreateInput>;
  };

  /**
   * application_status createMany
   */
  export type application_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many application_statuses.
     */
    data: application_statusCreateManyInput | application_statusCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * application_status update
   */
  export type application_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * The data needed to update a application_status.
     */
    data: XOR<application_statusUpdateInput, application_statusUncheckedUpdateInput>;
    /**
     * Choose, which application_status to update.
     */
    where: application_statusWhereUniqueInput;
  };

  /**
   * application_status updateMany
   */
  export type application_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update application_statuses.
     */
    data: XOR<application_statusUpdateManyMutationInput, application_statusUncheckedUpdateManyInput>;
    /**
     * Filter which application_statuses to update
     */
    where?: application_statusWhereInput;
  };

  /**
   * application_status upsert
   */
  export type application_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * The filter to search for the application_status to update in case it exists.
     */
    where: application_statusWhereUniqueInput;
    /**
     * In case the application_status found by the `where` argument doesn't exist, create a new application_status with this data.
     */
    create: XOR<application_statusCreateInput, application_statusUncheckedCreateInput>;
    /**
     * In case the application_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<application_statusUpdateInput, application_statusUncheckedUpdateInput>;
  };

  /**
   * application_status delete
   */
  export type application_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
    /**
     * Filter which application_status to delete.
     */
    where: application_statusWhereUniqueInput;
  };

  /**
   * application_status deleteMany
   */
  export type application_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which application_statuses to delete
     */
    where?: application_statusWhereInput;
  };

  /**
   * application_status without action
   */
  export type application_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the application_status
     */
    select?: application_statusSelect<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    image: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    image: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      image?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    image?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        image: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly image: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model donor_profile
   */

  export type AggregateDonor_profile = {
    _count: Donor_profileCountAggregateOutputType | null;
    _min: Donor_profileMinAggregateOutputType | null;
    _max: Donor_profileMaxAggregateOutputType | null;
  };

  export type Donor_profileMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Donor_profileMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Donor_profileCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Donor_profileMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Donor_profileMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Donor_profileCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Donor_profileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donor_profile to aggregate.
     */
    where?: donor_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donor_profiles to fetch.
     */
    orderBy?: donor_profileOrderByWithRelationInput | donor_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: donor_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donor_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donor_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned donor_profiles
     **/
    _count?: true | Donor_profileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Donor_profileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Donor_profileMaxAggregateInputType;
  };

  export type GetDonor_profileAggregateType<T extends Donor_profileAggregateArgs> = {
    [P in keyof T & keyof AggregateDonor_profile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonor_profile[P]>
      : GetScalarType<T[P], AggregateDonor_profile[P]>;
  };

  export type donor_profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donor_profileWhereInput;
    orderBy?: donor_profileOrderByWithAggregationInput | donor_profileOrderByWithAggregationInput[];
    by: Donor_profileScalarFieldEnum[] | Donor_profileScalarFieldEnum;
    having?: donor_profileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Donor_profileCountAggregateInputType | true;
    _min?: Donor_profileMinAggregateInputType;
    _max?: Donor_profileMaxAggregateInputType;
  };

  export type Donor_profileGroupByOutputType = {
    id: string;
    name: string | null;
    description: string | null;
    created_by: string;
    created_at: Date;
    updated_at: Date;
    _count: Donor_profileCountAggregateOutputType | null;
    _min: Donor_profileMinAggregateOutputType | null;
    _max: Donor_profileMaxAggregateOutputType | null;
  };

  type GetDonor_profileGroupByPayload<T extends donor_profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Donor_profileGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Donor_profileGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Donor_profileGroupByOutputType[P]>
          : GetScalarType<T[P], Donor_profileGroupByOutputType[P]>;
      }
    >
  >;

  export type donor_profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        created_by?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        donorship_application?: boolean | donor_profile$donorship_applicationArgs<ExtArgs>;
        _count?: boolean | Donor_profileCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['donor_profile']
    >;

  export type donor_profileSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type donor_profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    donorship_application?: boolean | donor_profile$donorship_applicationArgs<ExtArgs>;
    _count?: boolean | Donor_profileCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $donor_profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'donor_profile';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      donorship_application: Prisma.$donorship_applicationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string | null;
        description: string | null;
        created_by: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['donor_profile']
    >;
    composites: {};
  };

  type donor_profileGetPayload<S extends boolean | null | undefined | donor_profileDefaultArgs> = $Result.GetResult<
    Prisma.$donor_profilePayload,
    S
  >;

  type donor_profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    donor_profileFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Donor_profileCountAggregateInputType | true;
  };

  export interface donor_profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['donor_profile']; meta: { name: 'donor_profile' } };
    /**
     * Find zero or one Donor_profile that matches the filter.
     * @param {donor_profileFindUniqueArgs} args - Arguments to find a Donor_profile
     * @example
     * // Get one Donor_profile
     * const donor_profile = await prisma.donor_profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends donor_profileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, donor_profileFindUniqueArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Donor_profile that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {donor_profileFindUniqueOrThrowArgs} args - Arguments to find a Donor_profile
     * @example
     * // Get one Donor_profile
     * const donor_profile = await prisma.donor_profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends donor_profileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, donor_profileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Donor_profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donor_profileFindFirstArgs} args - Arguments to find a Donor_profile
     * @example
     * // Get one Donor_profile
     * const donor_profile = await prisma.donor_profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends donor_profileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, donor_profileFindFirstArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Donor_profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donor_profileFindFirstOrThrowArgs} args - Arguments to find a Donor_profile
     * @example
     * // Get one Donor_profile
     * const donor_profile = await prisma.donor_profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends donor_profileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, donor_profileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Donor_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donor_profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donor_profiles
     * const donor_profiles = await prisma.donor_profile.findMany()
     *
     * // Get first 10 Donor_profiles
     * const donor_profiles = await prisma.donor_profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const donor_profileWithIdOnly = await prisma.donor_profile.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends donor_profileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, donor_profileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Donor_profile.
     * @param {donor_profileCreateArgs} args - Arguments to create a Donor_profile.
     * @example
     * // Create one Donor_profile
     * const Donor_profile = await prisma.donor_profile.create({
     *   data: {
     *     // ... data to create a Donor_profile
     *   }
     * })
     *
     **/
    create<T extends donor_profileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, donor_profileCreateArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Donor_profiles.
     *     @param {donor_profileCreateManyArgs} args - Arguments to create many Donor_profiles.
     *     @example
     *     // Create many Donor_profiles
     *     const donor_profile = await prisma.donor_profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends donor_profileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, donor_profileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Donor_profile.
     * @param {donor_profileDeleteArgs} args - Arguments to delete one Donor_profile.
     * @example
     * // Delete one Donor_profile
     * const Donor_profile = await prisma.donor_profile.delete({
     *   where: {
     *     // ... filter to delete one Donor_profile
     *   }
     * })
     *
     **/
    delete<T extends donor_profileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, donor_profileDeleteArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Donor_profile.
     * @param {donor_profileUpdateArgs} args - Arguments to update one Donor_profile.
     * @example
     * // Update one Donor_profile
     * const donor_profile = await prisma.donor_profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends donor_profileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, donor_profileUpdateArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Donor_profiles.
     * @param {donor_profileDeleteManyArgs} args - Arguments to filter Donor_profiles to delete.
     * @example
     * // Delete a few Donor_profiles
     * const { count } = await prisma.donor_profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends donor_profileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, donor_profileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Donor_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donor_profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donor_profiles
     * const donor_profile = await prisma.donor_profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends donor_profileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, donor_profileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Donor_profile.
     * @param {donor_profileUpsertArgs} args - Arguments to update or create a Donor_profile.
     * @example
     * // Update or create a Donor_profile
     * const donor_profile = await prisma.donor_profile.upsert({
     *   create: {
     *     // ... data to create a Donor_profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donor_profile we want to update
     *   }
     * })
     **/
    upsert<T extends donor_profileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, donor_profileUpsertArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Donor_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donor_profileCountArgs} args - Arguments to filter Donor_profiles to count.
     * @example
     * // Count the number of Donor_profiles
     * const count = await prisma.donor_profile.count({
     *   where: {
     *     // ... the filter for the Donor_profiles we want to count
     *   }
     * })
     **/
    count<T extends donor_profileCountArgs>(
      args?: Subset<T, donor_profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Donor_profileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Donor_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Donor_profileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Donor_profileAggregateArgs>(
      args: Subset<T, Donor_profileAggregateArgs>,
    ): Prisma.PrismaPromise<GetDonor_profileAggregateType<T>>;

    /**
     * Group by Donor_profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donor_profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends donor_profileGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: donor_profileGroupByArgs['orderBy'] }
        : { orderBy?: donor_profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, donor_profileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDonor_profileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the donor_profile model
     */
    readonly fields: donor_profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for donor_profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__donor_profileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    donorship_application<T extends donor_profile$donorship_applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, donor_profile$donorship_applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the donor_profile model
   */
  interface donor_profileFieldRefs {
    readonly id: FieldRef<'donor_profile', 'String'>;
    readonly name: FieldRef<'donor_profile', 'String'>;
    readonly description: FieldRef<'donor_profile', 'String'>;
    readonly created_by: FieldRef<'donor_profile', 'String'>;
    readonly created_at: FieldRef<'donor_profile', 'DateTime'>;
    readonly updated_at: FieldRef<'donor_profile', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * donor_profile findUnique
   */
  export type donor_profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which donor_profile to fetch.
     */
    where: donor_profileWhereUniqueInput;
  };

  /**
   * donor_profile findUniqueOrThrow
   */
  export type donor_profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which donor_profile to fetch.
     */
    where: donor_profileWhereUniqueInput;
  };

  /**
   * donor_profile findFirst
   */
  export type donor_profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which donor_profile to fetch.
     */
    where?: donor_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donor_profiles to fetch.
     */
    orderBy?: donor_profileOrderByWithRelationInput | donor_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for donor_profiles.
     */
    cursor?: donor_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donor_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donor_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of donor_profiles.
     */
    distinct?: Donor_profileScalarFieldEnum | Donor_profileScalarFieldEnum[];
  };

  /**
   * donor_profile findFirstOrThrow
   */
  export type donor_profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which donor_profile to fetch.
     */
    where?: donor_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donor_profiles to fetch.
     */
    orderBy?: donor_profileOrderByWithRelationInput | donor_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for donor_profiles.
     */
    cursor?: donor_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donor_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donor_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of donor_profiles.
     */
    distinct?: Donor_profileScalarFieldEnum | Donor_profileScalarFieldEnum[];
  };

  /**
   * donor_profile findMany
   */
  export type donor_profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * Filter, which donor_profiles to fetch.
     */
    where?: donor_profileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donor_profiles to fetch.
     */
    orderBy?: donor_profileOrderByWithRelationInput | donor_profileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing donor_profiles.
     */
    cursor?: donor_profileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donor_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donor_profiles.
     */
    skip?: number;
    distinct?: Donor_profileScalarFieldEnum | Donor_profileScalarFieldEnum[];
  };

  /**
   * donor_profile create
   */
  export type donor_profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * The data needed to create a donor_profile.
     */
    data: XOR<donor_profileCreateInput, donor_profileUncheckedCreateInput>;
  };

  /**
   * donor_profile createMany
   */
  export type donor_profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many donor_profiles.
     */
    data: donor_profileCreateManyInput | donor_profileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * donor_profile update
   */
  export type donor_profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * The data needed to update a donor_profile.
     */
    data: XOR<donor_profileUpdateInput, donor_profileUncheckedUpdateInput>;
    /**
     * Choose, which donor_profile to update.
     */
    where: donor_profileWhereUniqueInput;
  };

  /**
   * donor_profile updateMany
   */
  export type donor_profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update donor_profiles.
     */
    data: XOR<donor_profileUpdateManyMutationInput, donor_profileUncheckedUpdateManyInput>;
    /**
     * Filter which donor_profiles to update
     */
    where?: donor_profileWhereInput;
  };

  /**
   * donor_profile upsert
   */
  export type donor_profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * The filter to search for the donor_profile to update in case it exists.
     */
    where: donor_profileWhereUniqueInput;
    /**
     * In case the donor_profile found by the `where` argument doesn't exist, create a new donor_profile with this data.
     */
    create: XOR<donor_profileCreateInput, donor_profileUncheckedCreateInput>;
    /**
     * In case the donor_profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<donor_profileUpdateInput, donor_profileUncheckedUpdateInput>;
  };

  /**
   * donor_profile delete
   */
  export type donor_profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    /**
     * Filter which donor_profile to delete.
     */
    where: donor_profileWhereUniqueInput;
  };

  /**
   * donor_profile deleteMany
   */
  export type donor_profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donor_profiles to delete
     */
    where?: donor_profileWhereInput;
  };

  /**
   * donor_profile.donorship_application
   */
  export type donor_profile$donorship_applicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    where?: donorship_applicationWhereInput;
    orderBy?: donorship_applicationOrderByWithRelationInput | donorship_applicationOrderByWithRelationInput[];
    cursor?: donorship_applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Donorship_applicationScalarFieldEnum | Donorship_applicationScalarFieldEnum[];
  };

  /**
   * donor_profile without action
   */
  export type donor_profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
  };

  /**
   * Model donorship_application
   */

  export type AggregateDonorship_application = {
    _count: Donorship_applicationCountAggregateOutputType | null;
    _min: Donorship_applicationMinAggregateOutputType | null;
    _max: Donorship_applicationMaxAggregateOutputType | null;
  };

  export type Donorship_applicationMinAggregateOutputType = {
    id: string | null;
    non_profit_organisation_id: string | null;
    status: string | null;
    donot_profile_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Donorship_applicationMaxAggregateOutputType = {
    id: string | null;
    non_profit_organisation_id: string | null;
    status: string | null;
    donot_profile_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Donorship_applicationCountAggregateOutputType = {
    id: number;
    non_profit_organisation_id: number;
    status: number;
    donot_profile_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Donorship_applicationMinAggregateInputType = {
    id?: true;
    non_profit_organisation_id?: true;
    status?: true;
    donot_profile_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Donorship_applicationMaxAggregateInputType = {
    id?: true;
    non_profit_organisation_id?: true;
    status?: true;
    donot_profile_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Donorship_applicationCountAggregateInputType = {
    id?: true;
    non_profit_organisation_id?: true;
    status?: true;
    donot_profile_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Donorship_applicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which donorship_application to aggregate.
     */
    where?: donorship_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donorship_applications to fetch.
     */
    orderBy?: donorship_applicationOrderByWithRelationInput | donorship_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: donorship_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donorship_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donorship_applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned donorship_applications
     **/
    _count?: true | Donorship_applicationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Donorship_applicationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Donorship_applicationMaxAggregateInputType;
  };

  export type GetDonorship_applicationAggregateType<T extends Donorship_applicationAggregateArgs> = {
    [P in keyof T & keyof AggregateDonorship_application]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonorship_application[P]>
      : GetScalarType<T[P], AggregateDonorship_application[P]>;
  };

  export type donorship_applicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: donorship_applicationWhereInput;
    orderBy?: donorship_applicationOrderByWithAggregationInput | donorship_applicationOrderByWithAggregationInput[];
    by: Donorship_applicationScalarFieldEnum[] | Donorship_applicationScalarFieldEnum;
    having?: donorship_applicationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Donorship_applicationCountAggregateInputType | true;
    _min?: Donorship_applicationMinAggregateInputType;
    _max?: Donorship_applicationMaxAggregateInputType;
  };

  export type Donorship_applicationGroupByOutputType = {
    id: string;
    non_profit_organisation_id: string;
    status: string | null;
    donot_profile_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Donorship_applicationCountAggregateOutputType | null;
    _min: Donorship_applicationMinAggregateOutputType | null;
    _max: Donorship_applicationMaxAggregateOutputType | null;
  };

  type GetDonorship_applicationGroupByPayload<T extends donorship_applicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Donorship_applicationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Donorship_applicationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Donorship_applicationGroupByOutputType[P]>
          : GetScalarType<T[P], Donorship_applicationGroupByOutputType[P]>;
      }
    >
  >;

  export type donorship_applicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        non_profit_organisation_id?: boolean;
        status?: boolean;
        donot_profile_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        donor_profile?: boolean | donor_profileDefaultArgs<ExtArgs>;
        non_profit_organization?: boolean | non_profit_organizationDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['donorship_application']
    >;

  export type donorship_applicationSelectScalar = {
    id?: boolean;
    non_profit_organisation_id?: boolean;
    status?: boolean;
    donot_profile_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type donorship_applicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor_profile?: boolean | donor_profileDefaultArgs<ExtArgs>;
    non_profit_organization?: boolean | non_profit_organizationDefaultArgs<ExtArgs>;
  };

  export type $donorship_applicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'donorship_application';
    objects: {
      donor_profile: Prisma.$donor_profilePayload<ExtArgs>;
      non_profit_organization: Prisma.$non_profit_organizationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        non_profit_organisation_id: string;
        status: string | null;
        donot_profile_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['donorship_application']
    >;
    composites: {};
  };

  type donorship_applicationGetPayload<S extends boolean | null | undefined | donorship_applicationDefaultArgs> =
    $Result.GetResult<Prisma.$donorship_applicationPayload, S>;

  type donorship_applicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    donorship_applicationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Donorship_applicationCountAggregateInputType | true;
  };

  export interface donorship_applicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['donorship_application'];
      meta: { name: 'donorship_application' };
    };
    /**
     * Find zero or one Donorship_application that matches the filter.
     * @param {donorship_applicationFindUniqueArgs} args - Arguments to find a Donorship_application
     * @example
     * // Get one Donorship_application
     * const donorship_application = await prisma.donorship_application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends donorship_applicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, donorship_applicationFindUniqueArgs<ExtArgs>>,
    ): Prisma__donorship_applicationClient<
      $Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Donorship_application that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {donorship_applicationFindUniqueOrThrowArgs} args - Arguments to find a Donorship_application
     * @example
     * // Get one Donorship_application
     * const donorship_application = await prisma.donorship_application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends donorship_applicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, donorship_applicationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__donorship_applicationClient<
      $Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Donorship_application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorship_applicationFindFirstArgs} args - Arguments to find a Donorship_application
     * @example
     * // Get one Donorship_application
     * const donorship_application = await prisma.donorship_application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends donorship_applicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, donorship_applicationFindFirstArgs<ExtArgs>>,
    ): Prisma__donorship_applicationClient<
      $Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Donorship_application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorship_applicationFindFirstOrThrowArgs} args - Arguments to find a Donorship_application
     * @example
     * // Get one Donorship_application
     * const donorship_application = await prisma.donorship_application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends donorship_applicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, donorship_applicationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__donorship_applicationClient<
      $Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Donorship_applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorship_applicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donorship_applications
     * const donorship_applications = await prisma.donorship_application.findMany()
     *
     * // Get first 10 Donorship_applications
     * const donorship_applications = await prisma.donorship_application.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const donorship_applicationWithIdOnly = await prisma.donorship_application.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends donorship_applicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, donorship_applicationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Donorship_application.
     * @param {donorship_applicationCreateArgs} args - Arguments to create a Donorship_application.
     * @example
     * // Create one Donorship_application
     * const Donorship_application = await prisma.donorship_application.create({
     *   data: {
     *     // ... data to create a Donorship_application
     *   }
     * })
     *
     **/
    create<T extends donorship_applicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, donorship_applicationCreateArgs<ExtArgs>>,
    ): Prisma__donorship_applicationClient<
      $Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Donorship_applications.
     *     @param {donorship_applicationCreateManyArgs} args - Arguments to create many Donorship_applications.
     *     @example
     *     // Create many Donorship_applications
     *     const donorship_application = await prisma.donorship_application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends donorship_applicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, donorship_applicationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Donorship_application.
     * @param {donorship_applicationDeleteArgs} args - Arguments to delete one Donorship_application.
     * @example
     * // Delete one Donorship_application
     * const Donorship_application = await prisma.donorship_application.delete({
     *   where: {
     *     // ... filter to delete one Donorship_application
     *   }
     * })
     *
     **/
    delete<T extends donorship_applicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, donorship_applicationDeleteArgs<ExtArgs>>,
    ): Prisma__donorship_applicationClient<
      $Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Donorship_application.
     * @param {donorship_applicationUpdateArgs} args - Arguments to update one Donorship_application.
     * @example
     * // Update one Donorship_application
     * const donorship_application = await prisma.donorship_application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends donorship_applicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, donorship_applicationUpdateArgs<ExtArgs>>,
    ): Prisma__donorship_applicationClient<
      $Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Donorship_applications.
     * @param {donorship_applicationDeleteManyArgs} args - Arguments to filter Donorship_applications to delete.
     * @example
     * // Delete a few Donorship_applications
     * const { count } = await prisma.donorship_application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends donorship_applicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, donorship_applicationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Donorship_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorship_applicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donorship_applications
     * const donorship_application = await prisma.donorship_application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends donorship_applicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, donorship_applicationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Donorship_application.
     * @param {donorship_applicationUpsertArgs} args - Arguments to update or create a Donorship_application.
     * @example
     * // Update or create a Donorship_application
     * const donorship_application = await prisma.donorship_application.upsert({
     *   create: {
     *     // ... data to create a Donorship_application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donorship_application we want to update
     *   }
     * })
     **/
    upsert<T extends donorship_applicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, donorship_applicationUpsertArgs<ExtArgs>>,
    ): Prisma__donorship_applicationClient<
      $Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Donorship_applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorship_applicationCountArgs} args - Arguments to filter Donorship_applications to count.
     * @example
     * // Count the number of Donorship_applications
     * const count = await prisma.donorship_application.count({
     *   where: {
     *     // ... the filter for the Donorship_applications we want to count
     *   }
     * })
     **/
    count<T extends donorship_applicationCountArgs>(
      args?: Subset<T, donorship_applicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Donorship_applicationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Donorship_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Donorship_applicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Donorship_applicationAggregateArgs>(
      args: Subset<T, Donorship_applicationAggregateArgs>,
    ): Prisma.PrismaPromise<GetDonorship_applicationAggregateType<T>>;

    /**
     * Group by Donorship_application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {donorship_applicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends donorship_applicationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: donorship_applicationGroupByArgs['orderBy'] }
        : { orderBy?: donorship_applicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, donorship_applicationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDonorship_applicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the donorship_application model
     */
    readonly fields: donorship_applicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for donorship_application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__donorship_applicationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    donor_profile<T extends donor_profileDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, donor_profileDefaultArgs<ExtArgs>>,
    ): Prisma__donor_profileClient<
      $Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    non_profit_organization<T extends non_profit_organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, non_profit_organizationDefaultArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the donorship_application model
   */
  interface donorship_applicationFieldRefs {
    readonly id: FieldRef<'donorship_application', 'String'>;
    readonly non_profit_organisation_id: FieldRef<'donorship_application', 'String'>;
    readonly status: FieldRef<'donorship_application', 'String'>;
    readonly donot_profile_id: FieldRef<'donorship_application', 'String'>;
    readonly created_at: FieldRef<'donorship_application', 'DateTime'>;
    readonly updated_at: FieldRef<'donorship_application', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * donorship_application findUnique
   */
  export type donorship_applicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the donorship_application
       */
      select?: donorship_applicationSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: donorship_applicationInclude<ExtArgs> | null;
      /**
       * Filter, which donorship_application to fetch.
       */
      where: donorship_applicationWhereUniqueInput;
    };

  /**
   * donorship_application findUniqueOrThrow
   */
  export type donorship_applicationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which donorship_application to fetch.
     */
    where: donorship_applicationWhereUniqueInput;
  };

  /**
   * donorship_application findFirst
   */
  export type donorship_applicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which donorship_application to fetch.
     */
    where?: donorship_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donorship_applications to fetch.
     */
    orderBy?: donorship_applicationOrderByWithRelationInput | donorship_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for donorship_applications.
     */
    cursor?: donorship_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donorship_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donorship_applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of donorship_applications.
     */
    distinct?: Donorship_applicationScalarFieldEnum | Donorship_applicationScalarFieldEnum[];
  };

  /**
   * donorship_application findFirstOrThrow
   */
  export type donorship_applicationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which donorship_application to fetch.
     */
    where?: donorship_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donorship_applications to fetch.
     */
    orderBy?: donorship_applicationOrderByWithRelationInput | donorship_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for donorship_applications.
     */
    cursor?: donorship_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donorship_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donorship_applications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of donorship_applications.
     */
    distinct?: Donorship_applicationScalarFieldEnum | Donorship_applicationScalarFieldEnum[];
  };

  /**
   * donorship_application findMany
   */
  export type donorship_applicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    /**
     * Filter, which donorship_applications to fetch.
     */
    where?: donorship_applicationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of donorship_applications to fetch.
     */
    orderBy?: donorship_applicationOrderByWithRelationInput | donorship_applicationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing donorship_applications.
     */
    cursor?: donorship_applicationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` donorship_applications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` donorship_applications.
     */
    skip?: number;
    distinct?: Donorship_applicationScalarFieldEnum | Donorship_applicationScalarFieldEnum[];
  };

  /**
   * donorship_application create
   */
  export type donorship_applicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    /**
     * The data needed to create a donorship_application.
     */
    data: XOR<donorship_applicationCreateInput, donorship_applicationUncheckedCreateInput>;
  };

  /**
   * donorship_application createMany
   */
  export type donorship_applicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * The data used to create many donorship_applications.
       */
      data: donorship_applicationCreateManyInput | donorship_applicationCreateManyInput[];
      skipDuplicates?: boolean;
    };

  /**
   * donorship_application update
   */
  export type donorship_applicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    /**
     * The data needed to update a donorship_application.
     */
    data: XOR<donorship_applicationUpdateInput, donorship_applicationUncheckedUpdateInput>;
    /**
     * Choose, which donorship_application to update.
     */
    where: donorship_applicationWhereUniqueInput;
  };

  /**
   * donorship_application updateMany
   */
  export type donorship_applicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * The data used to update donorship_applications.
       */
      data: XOR<donorship_applicationUpdateManyMutationInput, donorship_applicationUncheckedUpdateManyInput>;
      /**
       * Filter which donorship_applications to update
       */
      where?: donorship_applicationWhereInput;
    };

  /**
   * donorship_application upsert
   */
  export type donorship_applicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    /**
     * The filter to search for the donorship_application to update in case it exists.
     */
    where: donorship_applicationWhereUniqueInput;
    /**
     * In case the donorship_application found by the `where` argument doesn't exist, create a new donorship_application with this data.
     */
    create: XOR<donorship_applicationCreateInput, donorship_applicationUncheckedCreateInput>;
    /**
     * In case the donorship_application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<donorship_applicationUpdateInput, donorship_applicationUncheckedUpdateInput>;
  };

  /**
   * donorship_application delete
   */
  export type donorship_applicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    /**
     * Filter which donorship_application to delete.
     */
    where: donorship_applicationWhereUniqueInput;
  };

  /**
   * donorship_application deleteMany
   */
  export type donorship_applicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Filter which donorship_applications to delete
       */
      where?: donorship_applicationWhereInput;
    };

  /**
   * donorship_application without action
   */
  export type donorship_applicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
  };

  /**
   * Model non_profit_organization
   */

  export type AggregateNon_profit_organization = {
    _count: Non_profit_organizationCountAggregateOutputType | null;
    _min: Non_profit_organizationMinAggregateOutputType | null;
    _max: Non_profit_organizationMaxAggregateOutputType | null;
  };

  export type Non_profit_organizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Non_profit_organizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Non_profit_organizationCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Non_profit_organizationMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Non_profit_organizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Non_profit_organizationCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Non_profit_organizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Filter which non_profit_organization to aggregate.
       */
      where?: non_profit_organizationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of non_profit_organizations to fetch.
       */
      orderBy?: non_profit_organizationOrderByWithRelationInput | non_profit_organizationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: non_profit_organizationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` non_profit_organizations from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` non_profit_organizations.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned non_profit_organizations
       **/
      _count?: true | Non_profit_organizationCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: Non_profit_organizationMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: Non_profit_organizationMaxAggregateInputType;
    };

  export type GetNon_profit_organizationAggregateType<T extends Non_profit_organizationAggregateArgs> = {
    [P in keyof T & keyof AggregateNon_profit_organization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNon_profit_organization[P]>
      : GetScalarType<T[P], AggregateNon_profit_organization[P]>;
  };

  export type non_profit_organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: non_profit_organizationWhereInput;
    orderBy?: non_profit_organizationOrderByWithAggregationInput | non_profit_organizationOrderByWithAggregationInput[];
    by: Non_profit_organizationScalarFieldEnum[] | Non_profit_organizationScalarFieldEnum;
    having?: non_profit_organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Non_profit_organizationCountAggregateInputType | true;
    _min?: Non_profit_organizationMinAggregateInputType;
    _max?: Non_profit_organizationMaxAggregateInputType;
  };

  export type Non_profit_organizationGroupByOutputType = {
    id: string;
    name: string | null;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Non_profit_organizationCountAggregateOutputType | null;
    _min: Non_profit_organizationMinAggregateOutputType | null;
    _max: Non_profit_organizationMaxAggregateOutputType | null;
  };

  type GetNon_profit_organizationGroupByPayload<T extends non_profit_organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Non_profit_organizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Non_profit_organizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Non_profit_organizationGroupByOutputType[P]>
          : GetScalarType<T[P], Non_profit_organizationGroupByOutputType[P]>;
      }
    >
  >;

  export type non_profit_organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        donorship_application?: boolean | non_profit_organization$donorship_applicationArgs<ExtArgs>;
        _count?: boolean | Non_profit_organizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['non_profit_organization']
    >;

  export type non_profit_organizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type non_profit_organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donorship_application?: boolean | non_profit_organization$donorship_applicationArgs<ExtArgs>;
    _count?: boolean | Non_profit_organizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $non_profit_organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'non_profit_organization';
    objects: {
      donorship_application: Prisma.$donorship_applicationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string | null;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['non_profit_organization']
    >;
    composites: {};
  };

  type non_profit_organizationGetPayload<S extends boolean | null | undefined | non_profit_organizationDefaultArgs> =
    $Result.GetResult<Prisma.$non_profit_organizationPayload, S>;

  type non_profit_organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    non_profit_organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Non_profit_organizationCountAggregateInputType | true;
  };

  export interface non_profit_organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['non_profit_organization'];
      meta: { name: 'non_profit_organization' };
    };
    /**
     * Find zero or one Non_profit_organization that matches the filter.
     * @param {non_profit_organizationFindUniqueArgs} args - Arguments to find a Non_profit_organization
     * @example
     * // Get one Non_profit_organization
     * const non_profit_organization = await prisma.non_profit_organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends non_profit_organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, non_profit_organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Non_profit_organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {non_profit_organizationFindUniqueOrThrowArgs} args - Arguments to find a Non_profit_organization
     * @example
     * // Get one Non_profit_organization
     * const non_profit_organization = await prisma.non_profit_organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends non_profit_organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, non_profit_organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Non_profit_organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {non_profit_organizationFindFirstArgs} args - Arguments to find a Non_profit_organization
     * @example
     * // Get one Non_profit_organization
     * const non_profit_organization = await prisma.non_profit_organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends non_profit_organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, non_profit_organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Non_profit_organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {non_profit_organizationFindFirstOrThrowArgs} args - Arguments to find a Non_profit_organization
     * @example
     * // Get one Non_profit_organization
     * const non_profit_organization = await prisma.non_profit_organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends non_profit_organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, non_profit_organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Non_profit_organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {non_profit_organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Non_profit_organizations
     * const non_profit_organizations = await prisma.non_profit_organization.findMany()
     *
     * // Get first 10 Non_profit_organizations
     * const non_profit_organizations = await prisma.non_profit_organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const non_profit_organizationWithIdOnly = await prisma.non_profit_organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends non_profit_organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, non_profit_organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Non_profit_organization.
     * @param {non_profit_organizationCreateArgs} args - Arguments to create a Non_profit_organization.
     * @example
     * // Create one Non_profit_organization
     * const Non_profit_organization = await prisma.non_profit_organization.create({
     *   data: {
     *     // ... data to create a Non_profit_organization
     *   }
     * })
     *
     **/
    create<T extends non_profit_organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, non_profit_organizationCreateArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Non_profit_organizations.
     *     @param {non_profit_organizationCreateManyArgs} args - Arguments to create many Non_profit_organizations.
     *     @example
     *     // Create many Non_profit_organizations
     *     const non_profit_organization = await prisma.non_profit_organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends non_profit_organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, non_profit_organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Non_profit_organization.
     * @param {non_profit_organizationDeleteArgs} args - Arguments to delete one Non_profit_organization.
     * @example
     * // Delete one Non_profit_organization
     * const Non_profit_organization = await prisma.non_profit_organization.delete({
     *   where: {
     *     // ... filter to delete one Non_profit_organization
     *   }
     * })
     *
     **/
    delete<T extends non_profit_organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, non_profit_organizationDeleteArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Non_profit_organization.
     * @param {non_profit_organizationUpdateArgs} args - Arguments to update one Non_profit_organization.
     * @example
     * // Update one Non_profit_organization
     * const non_profit_organization = await prisma.non_profit_organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends non_profit_organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, non_profit_organizationUpdateArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Non_profit_organizations.
     * @param {non_profit_organizationDeleteManyArgs} args - Arguments to filter Non_profit_organizations to delete.
     * @example
     * // Delete a few Non_profit_organizations
     * const { count } = await prisma.non_profit_organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends non_profit_organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, non_profit_organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Non_profit_organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {non_profit_organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Non_profit_organizations
     * const non_profit_organization = await prisma.non_profit_organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends non_profit_organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, non_profit_organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Non_profit_organization.
     * @param {non_profit_organizationUpsertArgs} args - Arguments to update or create a Non_profit_organization.
     * @example
     * // Update or create a Non_profit_organization
     * const non_profit_organization = await prisma.non_profit_organization.upsert({
     *   create: {
     *     // ... data to create a Non_profit_organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Non_profit_organization we want to update
     *   }
     * })
     **/
    upsert<T extends non_profit_organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, non_profit_organizationUpsertArgs<ExtArgs>>,
    ): Prisma__non_profit_organizationClient<
      $Result.GetResult<Prisma.$non_profit_organizationPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Non_profit_organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {non_profit_organizationCountArgs} args - Arguments to filter Non_profit_organizations to count.
     * @example
     * // Count the number of Non_profit_organizations
     * const count = await prisma.non_profit_organization.count({
     *   where: {
     *     // ... the filter for the Non_profit_organizations we want to count
     *   }
     * })
     **/
    count<T extends non_profit_organizationCountArgs>(
      args?: Subset<T, non_profit_organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Non_profit_organizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Non_profit_organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Non_profit_organizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Non_profit_organizationAggregateArgs>(
      args: Subset<T, Non_profit_organizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetNon_profit_organizationAggregateType<T>>;

    /**
     * Group by Non_profit_organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {non_profit_organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends non_profit_organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: non_profit_organizationGroupByArgs['orderBy'] }
        : { orderBy?: non_profit_organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, non_profit_organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetNon_profit_organizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the non_profit_organization model
     */
    readonly fields: non_profit_organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for non_profit_organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__non_profit_organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    donorship_application<T extends non_profit_organization$donorship_applicationArgs<ExtArgs> = {}>(
      args?: Subset<T, non_profit_organization$donorship_applicationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donorship_applicationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the non_profit_organization model
   */
  interface non_profit_organizationFieldRefs {
    readonly id: FieldRef<'non_profit_organization', 'String'>;
    readonly name: FieldRef<'non_profit_organization', 'String'>;
    readonly description: FieldRef<'non_profit_organization', 'String'>;
    readonly created_at: FieldRef<'non_profit_organization', 'DateTime'>;
    readonly updated_at: FieldRef<'non_profit_organization', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * non_profit_organization findUnique
   */
  export type non_profit_organizationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the non_profit_organization
     */
    select?: non_profit_organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: non_profit_organizationInclude<ExtArgs> | null;
    /**
     * Filter, which non_profit_organization to fetch.
     */
    where: non_profit_organizationWhereUniqueInput;
  };

  /**
   * non_profit_organization findUniqueOrThrow
   */
  export type non_profit_organizationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the non_profit_organization
     */
    select?: non_profit_organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: non_profit_organizationInclude<ExtArgs> | null;
    /**
     * Filter, which non_profit_organization to fetch.
     */
    where: non_profit_organizationWhereUniqueInput;
  };

  /**
   * non_profit_organization findFirst
   */
  export type non_profit_organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the non_profit_organization
       */
      select?: non_profit_organizationSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: non_profit_organizationInclude<ExtArgs> | null;
      /**
       * Filter, which non_profit_organization to fetch.
       */
      where?: non_profit_organizationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of non_profit_organizations to fetch.
       */
      orderBy?: non_profit_organizationOrderByWithRelationInput | non_profit_organizationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for non_profit_organizations.
       */
      cursor?: non_profit_organizationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` non_profit_organizations from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` non_profit_organizations.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of non_profit_organizations.
       */
      distinct?: Non_profit_organizationScalarFieldEnum | Non_profit_organizationScalarFieldEnum[];
    };

  /**
   * non_profit_organization findFirstOrThrow
   */
  export type non_profit_organizationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the non_profit_organization
     */
    select?: non_profit_organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: non_profit_organizationInclude<ExtArgs> | null;
    /**
     * Filter, which non_profit_organization to fetch.
     */
    where?: non_profit_organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of non_profit_organizations to fetch.
     */
    orderBy?: non_profit_organizationOrderByWithRelationInput | non_profit_organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for non_profit_organizations.
     */
    cursor?: non_profit_organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` non_profit_organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` non_profit_organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of non_profit_organizations.
     */
    distinct?: Non_profit_organizationScalarFieldEnum | Non_profit_organizationScalarFieldEnum[];
  };

  /**
   * non_profit_organization findMany
   */
  export type non_profit_organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the non_profit_organization
       */
      select?: non_profit_organizationSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: non_profit_organizationInclude<ExtArgs> | null;
      /**
       * Filter, which non_profit_organizations to fetch.
       */
      where?: non_profit_organizationWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of non_profit_organizations to fetch.
       */
      orderBy?: non_profit_organizationOrderByWithRelationInput | non_profit_organizationOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing non_profit_organizations.
       */
      cursor?: non_profit_organizationWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` non_profit_organizations from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` non_profit_organizations.
       */
      skip?: number;
      distinct?: Non_profit_organizationScalarFieldEnum | Non_profit_organizationScalarFieldEnum[];
    };

  /**
   * non_profit_organization create
   */
  export type non_profit_organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the non_profit_organization
     */
    select?: non_profit_organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: non_profit_organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a non_profit_organization.
     */
    data?: XOR<non_profit_organizationCreateInput, non_profit_organizationUncheckedCreateInput>;
  };

  /**
   * non_profit_organization createMany
   */
  export type non_profit_organizationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many non_profit_organizations.
     */
    data: non_profit_organizationCreateManyInput | non_profit_organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * non_profit_organization update
   */
  export type non_profit_organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the non_profit_organization
     */
    select?: non_profit_organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: non_profit_organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a non_profit_organization.
     */
    data: XOR<non_profit_organizationUpdateInput, non_profit_organizationUncheckedUpdateInput>;
    /**
     * Choose, which non_profit_organization to update.
     */
    where: non_profit_organizationWhereUniqueInput;
  };

  /**
   * non_profit_organization updateMany
   */
  export type non_profit_organizationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update non_profit_organizations.
     */
    data: XOR<non_profit_organizationUpdateManyMutationInput, non_profit_organizationUncheckedUpdateManyInput>;
    /**
     * Filter which non_profit_organizations to update
     */
    where?: non_profit_organizationWhereInput;
  };

  /**
   * non_profit_organization upsert
   */
  export type non_profit_organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the non_profit_organization
     */
    select?: non_profit_organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: non_profit_organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the non_profit_organization to update in case it exists.
     */
    where: non_profit_organizationWhereUniqueInput;
    /**
     * In case the non_profit_organization found by the `where` argument doesn't exist, create a new non_profit_organization with this data.
     */
    create: XOR<non_profit_organizationCreateInput, non_profit_organizationUncheckedCreateInput>;
    /**
     * In case the non_profit_organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<non_profit_organizationUpdateInput, non_profit_organizationUncheckedUpdateInput>;
  };

  /**
   * non_profit_organization delete
   */
  export type non_profit_organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the non_profit_organization
     */
    select?: non_profit_organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: non_profit_organizationInclude<ExtArgs> | null;
    /**
     * Filter which non_profit_organization to delete.
     */
    where: non_profit_organizationWhereUniqueInput;
  };

  /**
   * non_profit_organization deleteMany
   */
  export type non_profit_organizationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which non_profit_organizations to delete
     */
    where?: non_profit_organizationWhereInput;
  };

  /**
   * non_profit_organization.donorship_application
   */
  export type non_profit_organization$donorship_applicationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the donorship_application
     */
    select?: donorship_applicationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donorship_applicationInclude<ExtArgs> | null;
    where?: donorship_applicationWhereInput;
    orderBy?: donorship_applicationOrderByWithRelationInput | donorship_applicationOrderByWithRelationInput[];
    cursor?: donorship_applicationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Donorship_applicationScalarFieldEnum | Donorship_applicationScalarFieldEnum[];
  };

  /**
   * non_profit_organization without action
   */
  export type non_profit_organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the non_profit_organization
     */
    select?: non_profit_organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: non_profit_organizationInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      donor_profile?: boolean | user$donor_profileArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    donor_profile?: boolean | user$donor_profileArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
      donor_profile: Prisma.$donor_profilePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    donor_profile<T extends user$donor_profileArgs<ExtArgs> = {}>(
      args?: Subset<T, user$donor_profileArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$donor_profilePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.donor_profile
   */
  export type user$donor_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the donor_profile
     */
    select?: donor_profileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: donor_profileInclude<ExtArgs> | null;
    where?: donor_profileWhereInput;
    orderBy?: donor_profileOrderByWithRelationInput | donor_profileOrderByWithRelationInput[];
    cursor?: donor_profileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Donor_profileScalarFieldEnum | Donor_profileScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Application_statusScalarFieldEnum: {
    id: 'id';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Application_statusScalarFieldEnum =
    (typeof Application_statusScalarFieldEnum)[keyof typeof Application_statusScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    image: 'image';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Donor_profileScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    created_by: 'created_by';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Donor_profileScalarFieldEnum =
    (typeof Donor_profileScalarFieldEnum)[keyof typeof Donor_profileScalarFieldEnum];

  export const Donorship_applicationScalarFieldEnum: {
    id: 'id';
    non_profit_organisation_id: 'non_profit_organisation_id';
    status: 'status';
    donot_profile_id: 'donot_profile_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Donorship_applicationScalarFieldEnum =
    (typeof Donorship_applicationScalarFieldEnum)[keyof typeof Donorship_applicationScalarFieldEnum];

  export const Non_profit_organizationScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Non_profit_organizationScalarFieldEnum =
    (typeof Non_profit_organizationScalarFieldEnum)[keyof typeof Non_profit_organizationScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type application_statusWhereInput = {
    AND?: application_statusWhereInput | application_statusWhereInput[];
    OR?: application_statusWhereInput[];
    NOT?: application_statusWhereInput | application_statusWhereInput[];
    id?: UuidFilter<'application_status'> | string;
    status?: StringNullableFilter<'application_status'> | string | null;
    created_at?: DateTimeFilter<'application_status'> | Date | string;
    updated_at?: DateTimeFilter<'application_status'> | Date | string;
  };

  export type application_statusOrderByWithRelationInput = {
    id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type application_statusWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: application_statusWhereInput | application_statusWhereInput[];
      OR?: application_statusWhereInput[];
      NOT?: application_statusWhereInput | application_statusWhereInput[];
      status?: StringNullableFilter<'application_status'> | string | null;
      created_at?: DateTimeFilter<'application_status'> | Date | string;
      updated_at?: DateTimeFilter<'application_status'> | Date | string;
    },
    'id'
  >;

  export type application_statusOrderByWithAggregationInput = {
    id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: application_statusCountOrderByAggregateInput;
    _max?: application_statusMaxOrderByAggregateInput;
    _min?: application_statusMinOrderByAggregateInput;
  };

  export type application_statusScalarWhereWithAggregatesInput = {
    AND?: application_statusScalarWhereWithAggregatesInput | application_statusScalarWhereWithAggregatesInput[];
    OR?: application_statusScalarWhereWithAggregatesInput[];
    NOT?: application_statusScalarWhereWithAggregatesInput | application_statusScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'application_status'> | string;
    status?: StringNullableWithAggregatesFilter<'application_status'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'application_status'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'application_status'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    image?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      image?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    image?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type donor_profileWhereInput = {
    AND?: donor_profileWhereInput | donor_profileWhereInput[];
    OR?: donor_profileWhereInput[];
    NOT?: donor_profileWhereInput | donor_profileWhereInput[];
    id?: UuidFilter<'donor_profile'> | string;
    name?: StringNullableFilter<'donor_profile'> | string | null;
    description?: StringNullableFilter<'donor_profile'> | string | null;
    created_by?: UuidFilter<'donor_profile'> | string;
    created_at?: DateTimeFilter<'donor_profile'> | Date | string;
    updated_at?: DateTimeFilter<'donor_profile'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    donorship_application?: Donorship_applicationListRelationFilter;
  };

  export type donor_profileOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    donorship_application?: donorship_applicationOrderByRelationAggregateInput;
  };

  export type donor_profileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: donor_profileWhereInput | donor_profileWhereInput[];
      OR?: donor_profileWhereInput[];
      NOT?: donor_profileWhereInput | donor_profileWhereInput[];
      name?: StringNullableFilter<'donor_profile'> | string | null;
      description?: StringNullableFilter<'donor_profile'> | string | null;
      created_by?: UuidFilter<'donor_profile'> | string;
      created_at?: DateTimeFilter<'donor_profile'> | Date | string;
      updated_at?: DateTimeFilter<'donor_profile'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      donorship_application?: Donorship_applicationListRelationFilter;
    },
    'id'
  >;

  export type donor_profileOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: donor_profileCountOrderByAggregateInput;
    _max?: donor_profileMaxOrderByAggregateInput;
    _min?: donor_profileMinOrderByAggregateInput;
  };

  export type donor_profileScalarWhereWithAggregatesInput = {
    AND?: donor_profileScalarWhereWithAggregatesInput | donor_profileScalarWhereWithAggregatesInput[];
    OR?: donor_profileScalarWhereWithAggregatesInput[];
    NOT?: donor_profileScalarWhereWithAggregatesInput | donor_profileScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'donor_profile'> | string;
    name?: StringNullableWithAggregatesFilter<'donor_profile'> | string | null;
    description?: StringNullableWithAggregatesFilter<'donor_profile'> | string | null;
    created_by?: UuidWithAggregatesFilter<'donor_profile'> | string;
    created_at?: DateTimeWithAggregatesFilter<'donor_profile'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'donor_profile'> | Date | string;
  };

  export type donorship_applicationWhereInput = {
    AND?: donorship_applicationWhereInput | donorship_applicationWhereInput[];
    OR?: donorship_applicationWhereInput[];
    NOT?: donorship_applicationWhereInput | donorship_applicationWhereInput[];
    id?: UuidFilter<'donorship_application'> | string;
    non_profit_organisation_id?: UuidFilter<'donorship_application'> | string;
    status?: StringNullableFilter<'donorship_application'> | string | null;
    donot_profile_id?: UuidFilter<'donorship_application'> | string;
    created_at?: DateTimeFilter<'donorship_application'> | Date | string;
    updated_at?: DateTimeFilter<'donorship_application'> | Date | string;
    donor_profile?: XOR<Donor_profileRelationFilter, donor_profileWhereInput>;
    non_profit_organization?: XOR<Non_profit_organizationRelationFilter, non_profit_organizationWhereInput>;
  };

  export type donorship_applicationOrderByWithRelationInput = {
    id?: SortOrder;
    non_profit_organisation_id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    donot_profile_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    donor_profile?: donor_profileOrderByWithRelationInput;
    non_profit_organization?: non_profit_organizationOrderByWithRelationInput;
  };

  export type donorship_applicationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: donorship_applicationWhereInput | donorship_applicationWhereInput[];
      OR?: donorship_applicationWhereInput[];
      NOT?: donorship_applicationWhereInput | donorship_applicationWhereInput[];
      non_profit_organisation_id?: UuidFilter<'donorship_application'> | string;
      status?: StringNullableFilter<'donorship_application'> | string | null;
      donot_profile_id?: UuidFilter<'donorship_application'> | string;
      created_at?: DateTimeFilter<'donorship_application'> | Date | string;
      updated_at?: DateTimeFilter<'donorship_application'> | Date | string;
      donor_profile?: XOR<Donor_profileRelationFilter, donor_profileWhereInput>;
      non_profit_organization?: XOR<Non_profit_organizationRelationFilter, non_profit_organizationWhereInput>;
    },
    'id'
  >;

  export type donorship_applicationOrderByWithAggregationInput = {
    id?: SortOrder;
    non_profit_organisation_id?: SortOrder;
    status?: SortOrderInput | SortOrder;
    donot_profile_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: donorship_applicationCountOrderByAggregateInput;
    _max?: donorship_applicationMaxOrderByAggregateInput;
    _min?: donorship_applicationMinOrderByAggregateInput;
  };

  export type donorship_applicationScalarWhereWithAggregatesInput = {
    AND?: donorship_applicationScalarWhereWithAggregatesInput | donorship_applicationScalarWhereWithAggregatesInput[];
    OR?: donorship_applicationScalarWhereWithAggregatesInput[];
    NOT?: donorship_applicationScalarWhereWithAggregatesInput | donorship_applicationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'donorship_application'> | string;
    non_profit_organisation_id?: UuidWithAggregatesFilter<'donorship_application'> | string;
    status?: StringNullableWithAggregatesFilter<'donorship_application'> | string | null;
    donot_profile_id?: UuidWithAggregatesFilter<'donorship_application'> | string;
    created_at?: DateTimeWithAggregatesFilter<'donorship_application'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'donorship_application'> | Date | string;
  };

  export type non_profit_organizationWhereInput = {
    AND?: non_profit_organizationWhereInput | non_profit_organizationWhereInput[];
    OR?: non_profit_organizationWhereInput[];
    NOT?: non_profit_organizationWhereInput | non_profit_organizationWhereInput[];
    id?: UuidFilter<'non_profit_organization'> | string;
    name?: StringNullableFilter<'non_profit_organization'> | string | null;
    description?: StringNullableFilter<'non_profit_organization'> | string | null;
    created_at?: DateTimeFilter<'non_profit_organization'> | Date | string;
    updated_at?: DateTimeFilter<'non_profit_organization'> | Date | string;
    donorship_application?: Donorship_applicationListRelationFilter;
  };

  export type non_profit_organizationOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    donorship_application?: donorship_applicationOrderByRelationAggregateInput;
  };

  export type non_profit_organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: non_profit_organizationWhereInput | non_profit_organizationWhereInput[];
      OR?: non_profit_organizationWhereInput[];
      NOT?: non_profit_organizationWhereInput | non_profit_organizationWhereInput[];
      name?: StringNullableFilter<'non_profit_organization'> | string | null;
      description?: StringNullableFilter<'non_profit_organization'> | string | null;
      created_at?: DateTimeFilter<'non_profit_organization'> | Date | string;
      updated_at?: DateTimeFilter<'non_profit_organization'> | Date | string;
      donorship_application?: Donorship_applicationListRelationFilter;
    },
    'id'
  >;

  export type non_profit_organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrderInput | SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: non_profit_organizationCountOrderByAggregateInput;
    _max?: non_profit_organizationMaxOrderByAggregateInput;
    _min?: non_profit_organizationMinOrderByAggregateInput;
  };

  export type non_profit_organizationScalarWhereWithAggregatesInput = {
    AND?:
      | non_profit_organizationScalarWhereWithAggregatesInput
      | non_profit_organizationScalarWhereWithAggregatesInput[];
    OR?: non_profit_organizationScalarWhereWithAggregatesInput[];
    NOT?:
      | non_profit_organizationScalarWhereWithAggregatesInput
      | non_profit_organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'non_profit_organization'> | string;
    name?: StringNullableWithAggregatesFilter<'non_profit_organization'> | string | null;
    description?: StringNullableWithAggregatesFilter<'non_profit_organization'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'non_profit_organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'non_profit_organization'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
    donor_profile?: Donor_profileListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
    donor_profile?: donor_profileOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
      donor_profile?: Donor_profileListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type application_statusCreateInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type application_statusUncheckedCreateInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type application_statusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type application_statusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type application_statusCreateManyInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type application_statusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type application_statusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type donor_profileCreateInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutDonor_profileInput;
    donorship_application?: donorship_applicationCreateNestedManyWithoutDonor_profileInput;
  };

  export type donor_profileUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    donorship_application?: donorship_applicationUncheckedCreateNestedManyWithoutDonor_profileInput;
  };

  export type donor_profileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutDonor_profileNestedInput;
    donorship_application?: donorship_applicationUpdateManyWithoutDonor_profileNestedInput;
  };

  export type donor_profileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donorship_application?: donorship_applicationUncheckedUpdateManyWithoutDonor_profileNestedInput;
  };

  export type donor_profileCreateManyInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type donor_profileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type donor_profileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type donorship_applicationCreateInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    donor_profile: donor_profileCreateNestedOneWithoutDonorship_applicationInput;
    non_profit_organization: non_profit_organizationCreateNestedOneWithoutDonorship_applicationInput;
  };

  export type donorship_applicationUncheckedCreateInput = {
    id?: string;
    non_profit_organisation_id: string;
    status?: string | null;
    donot_profile_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type donorship_applicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donor_profile?: donor_profileUpdateOneRequiredWithoutDonorship_applicationNestedInput;
    non_profit_organization?: non_profit_organizationUpdateOneRequiredWithoutDonorship_applicationNestedInput;
  };

  export type donorship_applicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    non_profit_organisation_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    donot_profile_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type donorship_applicationCreateManyInput = {
    id?: string;
    non_profit_organisation_id: string;
    status?: string | null;
    donot_profile_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type donorship_applicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type donorship_applicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    non_profit_organisation_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    donot_profile_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type non_profit_organizationCreateInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    donorship_application?: donorship_applicationCreateNestedManyWithoutNon_profit_organizationInput;
  };

  export type non_profit_organizationUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    donorship_application?: donorship_applicationUncheckedCreateNestedManyWithoutNon_profit_organizationInput;
  };

  export type non_profit_organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donorship_application?: donorship_applicationUpdateManyWithoutNon_profit_organizationNestedInput;
  };

  export type non_profit_organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donorship_application?: donorship_applicationUncheckedUpdateManyWithoutNon_profit_organizationNestedInput;
  };

  export type non_profit_organizationCreateManyInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type non_profit_organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type non_profit_organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    donor_profile?: donor_profileCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    donor_profile?: donor_profileUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    donor_profile?: donor_profileUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    donor_profile?: donor_profileUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type application_statusCountOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type application_statusMaxOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type application_statusMinOrderByAggregateInput = {
    id?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type Donorship_applicationListRelationFilter = {
    every?: donorship_applicationWhereInput;
    some?: donorship_applicationWhereInput;
    none?: donorship_applicationWhereInput;
  };

  export type donorship_applicationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type donor_profileCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type donor_profileMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type donor_profileMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_by?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Donor_profileRelationFilter = {
    is?: donor_profileWhereInput;
    isNot?: donor_profileWhereInput;
  };

  export type Non_profit_organizationRelationFilter = {
    is?: non_profit_organizationWhereInput;
    isNot?: non_profit_organizationWhereInput;
  };

  export type donorship_applicationCountOrderByAggregateInput = {
    id?: SortOrder;
    non_profit_organisation_id?: SortOrder;
    status?: SortOrder;
    donot_profile_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type donorship_applicationMaxOrderByAggregateInput = {
    id?: SortOrder;
    non_profit_organisation_id?: SortOrder;
    status?: SortOrder;
    donot_profile_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type donorship_applicationMinOrderByAggregateInput = {
    id?: SortOrder;
    non_profit_organisation_id?: SortOrder;
    status?: SortOrder;
    donot_profile_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type non_profit_organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type non_profit_organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type non_profit_organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type Donor_profileListRelationFilter = {
    every?: donor_profileWhereInput;
    some?: donor_profileWhereInput;
    none?: donor_profileWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type donor_profileOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type userCreateNestedOneWithoutDonor_profileInput = {
    create?: XOR<userCreateWithoutDonor_profileInput, userUncheckedCreateWithoutDonor_profileInput>;
    connectOrCreate?: userCreateOrConnectWithoutDonor_profileInput;
    connect?: userWhereUniqueInput;
  };

  export type donorship_applicationCreateNestedManyWithoutDonor_profileInput = {
    create?:
      | XOR<
          donorship_applicationCreateWithoutDonor_profileInput,
          donorship_applicationUncheckedCreateWithoutDonor_profileInput
        >
      | donorship_applicationCreateWithoutDonor_profileInput[]
      | donorship_applicationUncheckedCreateWithoutDonor_profileInput[];
    connectOrCreate?:
      | donorship_applicationCreateOrConnectWithoutDonor_profileInput
      | donorship_applicationCreateOrConnectWithoutDonor_profileInput[];
    createMany?: donorship_applicationCreateManyDonor_profileInputEnvelope;
    connect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
  };

  export type donorship_applicationUncheckedCreateNestedManyWithoutDonor_profileInput = {
    create?:
      | XOR<
          donorship_applicationCreateWithoutDonor_profileInput,
          donorship_applicationUncheckedCreateWithoutDonor_profileInput
        >
      | donorship_applicationCreateWithoutDonor_profileInput[]
      | donorship_applicationUncheckedCreateWithoutDonor_profileInput[];
    connectOrCreate?:
      | donorship_applicationCreateOrConnectWithoutDonor_profileInput
      | donorship_applicationCreateOrConnectWithoutDonor_profileInput[];
    createMany?: donorship_applicationCreateManyDonor_profileInputEnvelope;
    connect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutDonor_profileNestedInput = {
    create?: XOR<userCreateWithoutDonor_profileInput, userUncheckedCreateWithoutDonor_profileInput>;
    connectOrCreate?: userCreateOrConnectWithoutDonor_profileInput;
    upsert?: userUpsertWithoutDonor_profileInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutDonor_profileInput, userUpdateWithoutDonor_profileInput>,
      userUncheckedUpdateWithoutDonor_profileInput
    >;
  };

  export type donorship_applicationUpdateManyWithoutDonor_profileNestedInput = {
    create?:
      | XOR<
          donorship_applicationCreateWithoutDonor_profileInput,
          donorship_applicationUncheckedCreateWithoutDonor_profileInput
        >
      | donorship_applicationCreateWithoutDonor_profileInput[]
      | donorship_applicationUncheckedCreateWithoutDonor_profileInput[];
    connectOrCreate?:
      | donorship_applicationCreateOrConnectWithoutDonor_profileInput
      | donorship_applicationCreateOrConnectWithoutDonor_profileInput[];
    upsert?:
      | donorship_applicationUpsertWithWhereUniqueWithoutDonor_profileInput
      | donorship_applicationUpsertWithWhereUniqueWithoutDonor_profileInput[];
    createMany?: donorship_applicationCreateManyDonor_profileInputEnvelope;
    set?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    disconnect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    delete?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    connect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    update?:
      | donorship_applicationUpdateWithWhereUniqueWithoutDonor_profileInput
      | donorship_applicationUpdateWithWhereUniqueWithoutDonor_profileInput[];
    updateMany?:
      | donorship_applicationUpdateManyWithWhereWithoutDonor_profileInput
      | donorship_applicationUpdateManyWithWhereWithoutDonor_profileInput[];
    deleteMany?: donorship_applicationScalarWhereInput | donorship_applicationScalarWhereInput[];
  };

  export type donorship_applicationUncheckedUpdateManyWithoutDonor_profileNestedInput = {
    create?:
      | XOR<
          donorship_applicationCreateWithoutDonor_profileInput,
          donorship_applicationUncheckedCreateWithoutDonor_profileInput
        >
      | donorship_applicationCreateWithoutDonor_profileInput[]
      | donorship_applicationUncheckedCreateWithoutDonor_profileInput[];
    connectOrCreate?:
      | donorship_applicationCreateOrConnectWithoutDonor_profileInput
      | donorship_applicationCreateOrConnectWithoutDonor_profileInput[];
    upsert?:
      | donorship_applicationUpsertWithWhereUniqueWithoutDonor_profileInput
      | donorship_applicationUpsertWithWhereUniqueWithoutDonor_profileInput[];
    createMany?: donorship_applicationCreateManyDonor_profileInputEnvelope;
    set?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    disconnect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    delete?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    connect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    update?:
      | donorship_applicationUpdateWithWhereUniqueWithoutDonor_profileInput
      | donorship_applicationUpdateWithWhereUniqueWithoutDonor_profileInput[];
    updateMany?:
      | donorship_applicationUpdateManyWithWhereWithoutDonor_profileInput
      | donorship_applicationUpdateManyWithWhereWithoutDonor_profileInput[];
    deleteMany?: donorship_applicationScalarWhereInput | donorship_applicationScalarWhereInput[];
  };

  export type donor_profileCreateNestedOneWithoutDonorship_applicationInput = {
    create?: XOR<
      donor_profileCreateWithoutDonorship_applicationInput,
      donor_profileUncheckedCreateWithoutDonorship_applicationInput
    >;
    connectOrCreate?: donor_profileCreateOrConnectWithoutDonorship_applicationInput;
    connect?: donor_profileWhereUniqueInput;
  };

  export type non_profit_organizationCreateNestedOneWithoutDonorship_applicationInput = {
    create?: XOR<
      non_profit_organizationCreateWithoutDonorship_applicationInput,
      non_profit_organizationUncheckedCreateWithoutDonorship_applicationInput
    >;
    connectOrCreate?: non_profit_organizationCreateOrConnectWithoutDonorship_applicationInput;
    connect?: non_profit_organizationWhereUniqueInput;
  };

  export type donor_profileUpdateOneRequiredWithoutDonorship_applicationNestedInput = {
    create?: XOR<
      donor_profileCreateWithoutDonorship_applicationInput,
      donor_profileUncheckedCreateWithoutDonorship_applicationInput
    >;
    connectOrCreate?: donor_profileCreateOrConnectWithoutDonorship_applicationInput;
    upsert?: donor_profileUpsertWithoutDonorship_applicationInput;
    connect?: donor_profileWhereUniqueInput;
    update?: XOR<
      XOR<
        donor_profileUpdateToOneWithWhereWithoutDonorship_applicationInput,
        donor_profileUpdateWithoutDonorship_applicationInput
      >,
      donor_profileUncheckedUpdateWithoutDonorship_applicationInput
    >;
  };

  export type non_profit_organizationUpdateOneRequiredWithoutDonorship_applicationNestedInput = {
    create?: XOR<
      non_profit_organizationCreateWithoutDonorship_applicationInput,
      non_profit_organizationUncheckedCreateWithoutDonorship_applicationInput
    >;
    connectOrCreate?: non_profit_organizationCreateOrConnectWithoutDonorship_applicationInput;
    upsert?: non_profit_organizationUpsertWithoutDonorship_applicationInput;
    connect?: non_profit_organizationWhereUniqueInput;
    update?: XOR<
      XOR<
        non_profit_organizationUpdateToOneWithWhereWithoutDonorship_applicationInput,
        non_profit_organizationUpdateWithoutDonorship_applicationInput
      >,
      non_profit_organizationUncheckedUpdateWithoutDonorship_applicationInput
    >;
  };

  export type donorship_applicationCreateNestedManyWithoutNon_profit_organizationInput = {
    create?:
      | XOR<
          donorship_applicationCreateWithoutNon_profit_organizationInput,
          donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput
        >
      | donorship_applicationCreateWithoutNon_profit_organizationInput[]
      | donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput[];
    connectOrCreate?:
      | donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput
      | donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput[];
    createMany?: donorship_applicationCreateManyNon_profit_organizationInputEnvelope;
    connect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
  };

  export type donorship_applicationUncheckedCreateNestedManyWithoutNon_profit_organizationInput = {
    create?:
      | XOR<
          donorship_applicationCreateWithoutNon_profit_organizationInput,
          donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput
        >
      | donorship_applicationCreateWithoutNon_profit_organizationInput[]
      | donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput[];
    connectOrCreate?:
      | donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput
      | donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput[];
    createMany?: donorship_applicationCreateManyNon_profit_organizationInputEnvelope;
    connect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
  };

  export type donorship_applicationUpdateManyWithoutNon_profit_organizationNestedInput = {
    create?:
      | XOR<
          donorship_applicationCreateWithoutNon_profit_organizationInput,
          donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput
        >
      | donorship_applicationCreateWithoutNon_profit_organizationInput[]
      | donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput[];
    connectOrCreate?:
      | donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput
      | donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput[];
    upsert?:
      | donorship_applicationUpsertWithWhereUniqueWithoutNon_profit_organizationInput
      | donorship_applicationUpsertWithWhereUniqueWithoutNon_profit_organizationInput[];
    createMany?: donorship_applicationCreateManyNon_profit_organizationInputEnvelope;
    set?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    disconnect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    delete?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    connect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    update?:
      | donorship_applicationUpdateWithWhereUniqueWithoutNon_profit_organizationInput
      | donorship_applicationUpdateWithWhereUniqueWithoutNon_profit_organizationInput[];
    updateMany?:
      | donorship_applicationUpdateManyWithWhereWithoutNon_profit_organizationInput
      | donorship_applicationUpdateManyWithWhereWithoutNon_profit_organizationInput[];
    deleteMany?: donorship_applicationScalarWhereInput | donorship_applicationScalarWhereInput[];
  };

  export type donorship_applicationUncheckedUpdateManyWithoutNon_profit_organizationNestedInput = {
    create?:
      | XOR<
          donorship_applicationCreateWithoutNon_profit_organizationInput,
          donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput
        >
      | donorship_applicationCreateWithoutNon_profit_organizationInput[]
      | donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput[];
    connectOrCreate?:
      | donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput
      | donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput[];
    upsert?:
      | donorship_applicationUpsertWithWhereUniqueWithoutNon_profit_organizationInput
      | donorship_applicationUpsertWithWhereUniqueWithoutNon_profit_organizationInput[];
    createMany?: donorship_applicationCreateManyNon_profit_organizationInputEnvelope;
    set?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    disconnect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    delete?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    connect?: donorship_applicationWhereUniqueInput | donorship_applicationWhereUniqueInput[];
    update?:
      | donorship_applicationUpdateWithWhereUniqueWithoutNon_profit_organizationInput
      | donorship_applicationUpdateWithWhereUniqueWithoutNon_profit_organizationInput[];
    updateMany?:
      | donorship_applicationUpdateManyWithWhereWithoutNon_profit_organizationInput
      | donorship_applicationUpdateManyWithWhereWithoutNon_profit_organizationInput[];
    deleteMany?: donorship_applicationScalarWhereInput | donorship_applicationScalarWhereInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type donor_profileCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<donor_profileCreateWithoutUserInput, donor_profileUncheckedCreateWithoutUserInput>
      | donor_profileCreateWithoutUserInput[]
      | donor_profileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: donor_profileCreateOrConnectWithoutUserInput | donor_profileCreateOrConnectWithoutUserInput[];
    createMany?: donor_profileCreateManyUserInputEnvelope;
    connect?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type donor_profileUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<donor_profileCreateWithoutUserInput, donor_profileUncheckedCreateWithoutUserInput>
      | donor_profileCreateWithoutUserInput[]
      | donor_profileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: donor_profileCreateOrConnectWithoutUserInput | donor_profileCreateOrConnectWithoutUserInput[];
    createMany?: donor_profileCreateManyUserInputEnvelope;
    connect?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type donor_profileUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<donor_profileCreateWithoutUserInput, donor_profileUncheckedCreateWithoutUserInput>
      | donor_profileCreateWithoutUserInput[]
      | donor_profileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: donor_profileCreateOrConnectWithoutUserInput | donor_profileCreateOrConnectWithoutUserInput[];
    upsert?: donor_profileUpsertWithWhereUniqueWithoutUserInput | donor_profileUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: donor_profileCreateManyUserInputEnvelope;
    set?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
    disconnect?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
    delete?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
    connect?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
    update?: donor_profileUpdateWithWhereUniqueWithoutUserInput | donor_profileUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: donor_profileUpdateManyWithWhereWithoutUserInput | donor_profileUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: donor_profileScalarWhereInput | donor_profileScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type donor_profileUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<donor_profileCreateWithoutUserInput, donor_profileUncheckedCreateWithoutUserInput>
      | donor_profileCreateWithoutUserInput[]
      | donor_profileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: donor_profileCreateOrConnectWithoutUserInput | donor_profileCreateOrConnectWithoutUserInput[];
    upsert?: donor_profileUpsertWithWhereUniqueWithoutUserInput | donor_profileUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: donor_profileCreateManyUserInputEnvelope;
    set?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
    disconnect?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
    delete?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
    connect?: donor_profileWhereUniqueInput | donor_profileWhereUniqueInput[];
    update?: donor_profileUpdateWithWhereUniqueWithoutUserInput | donor_profileUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: donor_profileUpdateManyWithWhereWithoutUserInput | donor_profileUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: donor_profileScalarWhereInput | donor_profileScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    donor_profile?: donor_profileCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    donor_profile?: donor_profileUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donor_profile?: donor_profileUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donor_profile?: donor_profileUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutDonor_profileInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutDonor_profileInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutDonor_profileInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutDonor_profileInput, userUncheckedCreateWithoutDonor_profileInput>;
  };

  export type donorship_applicationCreateWithoutDonor_profileInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    non_profit_organization: non_profit_organizationCreateNestedOneWithoutDonorship_applicationInput;
  };

  export type donorship_applicationUncheckedCreateWithoutDonor_profileInput = {
    id?: string;
    non_profit_organisation_id: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type donorship_applicationCreateOrConnectWithoutDonor_profileInput = {
    where: donorship_applicationWhereUniqueInput;
    create: XOR<
      donorship_applicationCreateWithoutDonor_profileInput,
      donorship_applicationUncheckedCreateWithoutDonor_profileInput
    >;
  };

  export type donorship_applicationCreateManyDonor_profileInputEnvelope = {
    data: donorship_applicationCreateManyDonor_profileInput | donorship_applicationCreateManyDonor_profileInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutDonor_profileInput = {
    update: XOR<userUpdateWithoutDonor_profileInput, userUncheckedUpdateWithoutDonor_profileInput>;
    create: XOR<userCreateWithoutDonor_profileInput, userUncheckedCreateWithoutDonor_profileInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutDonor_profileInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutDonor_profileInput, userUncheckedUpdateWithoutDonor_profileInput>;
  };

  export type userUpdateWithoutDonor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutDonor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type donorship_applicationUpsertWithWhereUniqueWithoutDonor_profileInput = {
    where: donorship_applicationWhereUniqueInput;
    update: XOR<
      donorship_applicationUpdateWithoutDonor_profileInput,
      donorship_applicationUncheckedUpdateWithoutDonor_profileInput
    >;
    create: XOR<
      donorship_applicationCreateWithoutDonor_profileInput,
      donorship_applicationUncheckedCreateWithoutDonor_profileInput
    >;
  };

  export type donorship_applicationUpdateWithWhereUniqueWithoutDonor_profileInput = {
    where: donorship_applicationWhereUniqueInput;
    data: XOR<
      donorship_applicationUpdateWithoutDonor_profileInput,
      donorship_applicationUncheckedUpdateWithoutDonor_profileInput
    >;
  };

  export type donorship_applicationUpdateManyWithWhereWithoutDonor_profileInput = {
    where: donorship_applicationScalarWhereInput;
    data: XOR<
      donorship_applicationUpdateManyMutationInput,
      donorship_applicationUncheckedUpdateManyWithoutDonor_profileInput
    >;
  };

  export type donorship_applicationScalarWhereInput = {
    AND?: donorship_applicationScalarWhereInput | donorship_applicationScalarWhereInput[];
    OR?: donorship_applicationScalarWhereInput[];
    NOT?: donorship_applicationScalarWhereInput | donorship_applicationScalarWhereInput[];
    id?: UuidFilter<'donorship_application'> | string;
    non_profit_organisation_id?: UuidFilter<'donorship_application'> | string;
    status?: StringNullableFilter<'donorship_application'> | string | null;
    donot_profile_id?: UuidFilter<'donorship_application'> | string;
    created_at?: DateTimeFilter<'donorship_application'> | Date | string;
    updated_at?: DateTimeFilter<'donorship_application'> | Date | string;
  };

  export type donor_profileCreateWithoutDonorship_applicationInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutDonor_profileInput;
  };

  export type donor_profileUncheckedCreateWithoutDonorship_applicationInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type donor_profileCreateOrConnectWithoutDonorship_applicationInput = {
    where: donor_profileWhereUniqueInput;
    create: XOR<
      donor_profileCreateWithoutDonorship_applicationInput,
      donor_profileUncheckedCreateWithoutDonorship_applicationInput
    >;
  };

  export type non_profit_organizationCreateWithoutDonorship_applicationInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type non_profit_organizationUncheckedCreateWithoutDonorship_applicationInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type non_profit_organizationCreateOrConnectWithoutDonorship_applicationInput = {
    where: non_profit_organizationWhereUniqueInput;
    create: XOR<
      non_profit_organizationCreateWithoutDonorship_applicationInput,
      non_profit_organizationUncheckedCreateWithoutDonorship_applicationInput
    >;
  };

  export type donor_profileUpsertWithoutDonorship_applicationInput = {
    update: XOR<
      donor_profileUpdateWithoutDonorship_applicationInput,
      donor_profileUncheckedUpdateWithoutDonorship_applicationInput
    >;
    create: XOR<
      donor_profileCreateWithoutDonorship_applicationInput,
      donor_profileUncheckedCreateWithoutDonorship_applicationInput
    >;
    where?: donor_profileWhereInput;
  };

  export type donor_profileUpdateToOneWithWhereWithoutDonorship_applicationInput = {
    where?: donor_profileWhereInput;
    data: XOR<
      donor_profileUpdateWithoutDonorship_applicationInput,
      donor_profileUncheckedUpdateWithoutDonorship_applicationInput
    >;
  };

  export type donor_profileUpdateWithoutDonorship_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutDonor_profileNestedInput;
  };

  export type donor_profileUncheckedUpdateWithoutDonorship_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_by?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type non_profit_organizationUpsertWithoutDonorship_applicationInput = {
    update: XOR<
      non_profit_organizationUpdateWithoutDonorship_applicationInput,
      non_profit_organizationUncheckedUpdateWithoutDonorship_applicationInput
    >;
    create: XOR<
      non_profit_organizationCreateWithoutDonorship_applicationInput,
      non_profit_organizationUncheckedCreateWithoutDonorship_applicationInput
    >;
    where?: non_profit_organizationWhereInput;
  };

  export type non_profit_organizationUpdateToOneWithWhereWithoutDonorship_applicationInput = {
    where?: non_profit_organizationWhereInput;
    data: XOR<
      non_profit_organizationUpdateWithoutDonorship_applicationInput,
      non_profit_organizationUncheckedUpdateWithoutDonorship_applicationInput
    >;
  };

  export type non_profit_organizationUpdateWithoutDonorship_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type non_profit_organizationUncheckedUpdateWithoutDonorship_applicationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type donorship_applicationCreateWithoutNon_profit_organizationInput = {
    id?: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    donor_profile: donor_profileCreateNestedOneWithoutDonorship_applicationInput;
  };

  export type donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput = {
    id?: string;
    status?: string | null;
    donot_profile_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type donorship_applicationCreateOrConnectWithoutNon_profit_organizationInput = {
    where: donorship_applicationWhereUniqueInput;
    create: XOR<
      donorship_applicationCreateWithoutNon_profit_organizationInput,
      donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput
    >;
  };

  export type donorship_applicationCreateManyNon_profit_organizationInputEnvelope = {
    data:
      | donorship_applicationCreateManyNon_profit_organizationInput
      | donorship_applicationCreateManyNon_profit_organizationInput[];
    skipDuplicates?: boolean;
  };

  export type donorship_applicationUpsertWithWhereUniqueWithoutNon_profit_organizationInput = {
    where: donorship_applicationWhereUniqueInput;
    update: XOR<
      donorship_applicationUpdateWithoutNon_profit_organizationInput,
      donorship_applicationUncheckedUpdateWithoutNon_profit_organizationInput
    >;
    create: XOR<
      donorship_applicationCreateWithoutNon_profit_organizationInput,
      donorship_applicationUncheckedCreateWithoutNon_profit_organizationInput
    >;
  };

  export type donorship_applicationUpdateWithWhereUniqueWithoutNon_profit_organizationInput = {
    where: donorship_applicationWhereUniqueInput;
    data: XOR<
      donorship_applicationUpdateWithoutNon_profit_organizationInput,
      donorship_applicationUncheckedUpdateWithoutNon_profit_organizationInput
    >;
  };

  export type donorship_applicationUpdateManyWithWhereWithoutNon_profit_organizationInput = {
    where: donorship_applicationScalarWhereInput;
    data: XOR<
      donorship_applicationUpdateManyMutationInput,
      donorship_applicationUncheckedUpdateManyWithoutNon_profit_organizationInput
    >;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type donor_profileCreateWithoutUserInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    donorship_application?: donorship_applicationCreateNestedManyWithoutDonor_profileInput;
  };

  export type donor_profileUncheckedCreateWithoutUserInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    donorship_application?: donorship_applicationUncheckedCreateNestedManyWithoutDonor_profileInput;
  };

  export type donor_profileCreateOrConnectWithoutUserInput = {
    where: donor_profileWhereUniqueInput;
    create: XOR<donor_profileCreateWithoutUserInput, donor_profileUncheckedCreateWithoutUserInput>;
  };

  export type donor_profileCreateManyUserInputEnvelope = {
    data: donor_profileCreateManyUserInput | donor_profileCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    image?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type donor_profileUpsertWithWhereUniqueWithoutUserInput = {
    where: donor_profileWhereUniqueInput;
    update: XOR<donor_profileUpdateWithoutUserInput, donor_profileUncheckedUpdateWithoutUserInput>;
    create: XOR<donor_profileCreateWithoutUserInput, donor_profileUncheckedCreateWithoutUserInput>;
  };

  export type donor_profileUpdateWithWhereUniqueWithoutUserInput = {
    where: donor_profileWhereUniqueInput;
    data: XOR<donor_profileUpdateWithoutUserInput, donor_profileUncheckedUpdateWithoutUserInput>;
  };

  export type donor_profileUpdateManyWithWhereWithoutUserInput = {
    where: donor_profileScalarWhereInput;
    data: XOR<donor_profileUpdateManyMutationInput, donor_profileUncheckedUpdateManyWithoutUserInput>;
  };

  export type donor_profileScalarWhereInput = {
    AND?: donor_profileScalarWhereInput | donor_profileScalarWhereInput[];
    OR?: donor_profileScalarWhereInput[];
    NOT?: donor_profileScalarWhereInput | donor_profileScalarWhereInput[];
    id?: UuidFilter<'donor_profile'> | string;
    name?: StringNullableFilter<'donor_profile'> | string | null;
    description?: StringNullableFilter<'donor_profile'> | string | null;
    created_by?: UuidFilter<'donor_profile'> | string;
    created_at?: DateTimeFilter<'donor_profile'> | Date | string;
    updated_at?: DateTimeFilter<'donor_profile'> | Date | string;
  };

  export type donorship_applicationCreateManyDonor_profileInput = {
    id?: string;
    non_profit_organisation_id: string;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type donorship_applicationUpdateWithoutDonor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    non_profit_organization?: non_profit_organizationUpdateOneRequiredWithoutDonorship_applicationNestedInput;
  };

  export type donorship_applicationUncheckedUpdateWithoutDonor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    non_profit_organisation_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type donorship_applicationUncheckedUpdateManyWithoutDonor_profileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    non_profit_organisation_id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type donorship_applicationCreateManyNon_profit_organizationInput = {
    id?: string;
    status?: string | null;
    donot_profile_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type donorship_applicationUpdateWithoutNon_profit_organizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donor_profile?: donor_profileUpdateOneRequiredWithoutDonorship_applicationNestedInput;
  };

  export type donorship_applicationUncheckedUpdateWithoutNon_profit_organizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    donot_profile_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type donorship_applicationUncheckedUpdateManyWithoutNon_profit_organizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    donot_profile_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type donor_profileCreateManyUserInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type donor_profileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donorship_application?: donorship_applicationUpdateManyWithoutDonor_profileNestedInput;
  };

  export type donor_profileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    donorship_application?: donorship_applicationUncheckedUpdateManyWithoutDonor_profileNestedInput;
  };

  export type donor_profileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use Donor_profileCountOutputTypeDefaultArgs instead
   */
  export type Donor_profileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Donor_profileCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Non_profit_organizationCountOutputTypeDefaultArgs instead
   */
  export type Non_profit_organizationCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Non_profit_organizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use application_statusDefaultArgs instead
   */
  export type application_statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    application_statusDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use donor_profileDefaultArgs instead
   */
  export type donor_profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    donor_profileDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use donorship_applicationDefaultArgs instead
   */
  export type donorship_applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    donorship_applicationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use non_profit_organizationDefaultArgs instead
   */
  export type non_profit_organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    non_profit_organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
