
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TelegramConnection
 * 
 */
export type TelegramConnection = $Result.DefaultSelection<Prisma.$TelegramConnectionPayload>
/**
 * Model TraderProfile
 * 
 */
export type TraderProfile = $Result.DefaultSelection<Prisma.$TraderProfilePayload>
/**
 * Model RiskRules
 * 
 */
export type RiskRules = $Result.DefaultSelection<Prisma.$RiskRulesPayload>
/**
 * Model TradingRules
 * 
 */
export type TradingRules = $Result.DefaultSelection<Prisma.$TradingRulesPayload>
/**
 * Model MentalProfile
 * 
 */
export type MentalProfile = $Result.DefaultSelection<Prisma.$MentalProfilePayload>
/**
 * Model CoachingPreferences
 * 
 */
export type CoachingPreferences = $Result.DefaultSelection<Prisma.$CoachingPreferencesPayload>
/**
 * Model NewsEvent
 * 
 */
export type NewsEvent = $Result.DefaultSelection<Prisma.$NewsEventPayload>
/**
 * Model SentNewsAlert
 * 
 */
export type SentNewsAlert = $Result.DefaultSelection<Prisma.$SentNewsAlertPayload>
/**
 * Model CoachingLog
 * 
 */
export type CoachingLog = $Result.DefaultSelection<Prisma.$CoachingLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionStatus: {
  INACTIVE: 'INACTIVE',
  TRIALING: 'TRIALING',
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const TradingStyle: {
  SCALP: 'SCALP',
  DAY_TRADING: 'DAY_TRADING',
  SWING: 'SWING'
};

export type TradingStyle = (typeof TradingStyle)[keyof typeof TradingStyle]


export const CoachingTone: {
  TOUGH: 'TOUGH',
  DIRECT: 'DIRECT',
  CALM_SHARP: 'CALM_SHARP'
};

export type CoachingTone = (typeof CoachingTone)[keyof typeof CoachingTone]


export const ResponseStyle: {
  VERY_SHORT: 'VERY_SHORT',
  SHORT_WITH_EXPLANATION: 'SHORT_WITH_EXPLANATION'
};

export type ResponseStyle = (typeof ResponseStyle)[keyof typeof ResponseStyle]


export const AlertType: {
  DAILY_BRIEFING: 'DAILY_BRIEFING',
  PRE_NEWS: 'PRE_NEWS'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]

}

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type TradingStyle = $Enums.TradingStyle

export const TradingStyle: typeof $Enums.TradingStyle

export type CoachingTone = $Enums.CoachingTone

export const CoachingTone: typeof $Enums.CoachingTone

export type ResponseStyle = $Enums.ResponseStyle

export const ResponseStyle: typeof $Enums.ResponseStyle

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telegramConnection`: Exposes CRUD operations for the **TelegramConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramConnections
    * const telegramConnections = await prisma.telegramConnection.findMany()
    * ```
    */
  get telegramConnection(): Prisma.TelegramConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.traderProfile`: Exposes CRUD operations for the **TraderProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TraderProfiles
    * const traderProfiles = await prisma.traderProfile.findMany()
    * ```
    */
  get traderProfile(): Prisma.TraderProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.riskRules`: Exposes CRUD operations for the **RiskRules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RiskRules
    * const riskRules = await prisma.riskRules.findMany()
    * ```
    */
  get riskRules(): Prisma.RiskRulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tradingRules`: Exposes CRUD operations for the **TradingRules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TradingRules
    * const tradingRules = await prisma.tradingRules.findMany()
    * ```
    */
  get tradingRules(): Prisma.TradingRulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mentalProfile`: Exposes CRUD operations for the **MentalProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MentalProfiles
    * const mentalProfiles = await prisma.mentalProfile.findMany()
    * ```
    */
  get mentalProfile(): Prisma.MentalProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coachingPreferences`: Exposes CRUD operations for the **CoachingPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachingPreferences
    * const coachingPreferences = await prisma.coachingPreferences.findMany()
    * ```
    */
  get coachingPreferences(): Prisma.CoachingPreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsEvent`: Exposes CRUD operations for the **NewsEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsEvents
    * const newsEvents = await prisma.newsEvent.findMany()
    * ```
    */
  get newsEvent(): Prisma.NewsEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sentNewsAlert`: Exposes CRUD operations for the **SentNewsAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SentNewsAlerts
    * const sentNewsAlerts = await prisma.sentNewsAlert.findMany()
    * ```
    */
  get sentNewsAlert(): Prisma.SentNewsAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coachingLog`: Exposes CRUD operations for the **CoachingLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachingLogs
    * const coachingLogs = await prisma.coachingLog.findMany()
    * ```
    */
  get coachingLog(): Prisma.CoachingLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TelegramConnection: 'TelegramConnection',
    TraderProfile: 'TraderProfile',
    RiskRules: 'RiskRules',
    TradingRules: 'TradingRules',
    MentalProfile: 'MentalProfile',
    CoachingPreferences: 'CoachingPreferences',
    NewsEvent: 'NewsEvent',
    SentNewsAlert: 'SentNewsAlert',
    CoachingLog: 'CoachingLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "telegramConnection" | "traderProfile" | "riskRules" | "tradingRules" | "mentalProfile" | "coachingPreferences" | "newsEvent" | "sentNewsAlert" | "coachingLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TelegramConnection: {
        payload: Prisma.$TelegramConnectionPayload<ExtArgs>
        fields: Prisma.TelegramConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>
          }
          findFirst: {
            args: Prisma.TelegramConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>
          }
          findMany: {
            args: Prisma.TelegramConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>[]
          }
          create: {
            args: Prisma.TelegramConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>
          }
          createMany: {
            args: Prisma.TelegramConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelegramConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>[]
          }
          delete: {
            args: Prisma.TelegramConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>
          }
          update: {
            args: Prisma.TelegramConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>
          }
          deleteMany: {
            args: Prisma.TelegramConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelegramConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>[]
          }
          upsert: {
            args: Prisma.TelegramConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramConnectionPayload>
          }
          aggregate: {
            args: Prisma.TelegramConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramConnection>
          }
          groupBy: {
            args: Prisma.TelegramConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelegramConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramConnectionCountAggregateOutputType> | number
          }
        }
      }
      TraderProfile: {
        payload: Prisma.$TraderProfilePayload<ExtArgs>
        fields: Prisma.TraderProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraderProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraderProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          findFirst: {
            args: Prisma.TraderProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraderProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          findMany: {
            args: Prisma.TraderProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>[]
          }
          create: {
            args: Prisma.TraderProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          createMany: {
            args: Prisma.TraderProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TraderProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>[]
          }
          delete: {
            args: Prisma.TraderProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          update: {
            args: Prisma.TraderProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          deleteMany: {
            args: Prisma.TraderProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraderProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TraderProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>[]
          }
          upsert: {
            args: Prisma.TraderProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraderProfilePayload>
          }
          aggregate: {
            args: Prisma.TraderProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTraderProfile>
          }
          groupBy: {
            args: Prisma.TraderProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraderProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraderProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TraderProfileCountAggregateOutputType> | number
          }
        }
      }
      RiskRules: {
        payload: Prisma.$RiskRulesPayload<ExtArgs>
        fields: Prisma.RiskRulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiskRulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiskRulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>
          }
          findFirst: {
            args: Prisma.RiskRulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiskRulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>
          }
          findMany: {
            args: Prisma.RiskRulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>[]
          }
          create: {
            args: Prisma.RiskRulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>
          }
          createMany: {
            args: Prisma.RiskRulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiskRulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>[]
          }
          delete: {
            args: Prisma.RiskRulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>
          }
          update: {
            args: Prisma.RiskRulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>
          }
          deleteMany: {
            args: Prisma.RiskRulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiskRulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiskRulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>[]
          }
          upsert: {
            args: Prisma.RiskRulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiskRulesPayload>
          }
          aggregate: {
            args: Prisma.RiskRulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRiskRules>
          }
          groupBy: {
            args: Prisma.RiskRulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiskRulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiskRulesCountArgs<ExtArgs>
            result: $Utils.Optional<RiskRulesCountAggregateOutputType> | number
          }
        }
      }
      TradingRules: {
        payload: Prisma.$TradingRulesPayload<ExtArgs>
        fields: Prisma.TradingRulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradingRulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradingRulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>
          }
          findFirst: {
            args: Prisma.TradingRulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradingRulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>
          }
          findMany: {
            args: Prisma.TradingRulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>[]
          }
          create: {
            args: Prisma.TradingRulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>
          }
          createMany: {
            args: Prisma.TradingRulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradingRulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>[]
          }
          delete: {
            args: Prisma.TradingRulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>
          }
          update: {
            args: Prisma.TradingRulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>
          }
          deleteMany: {
            args: Prisma.TradingRulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradingRulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradingRulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>[]
          }
          upsert: {
            args: Prisma.TradingRulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradingRulesPayload>
          }
          aggregate: {
            args: Prisma.TradingRulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradingRules>
          }
          groupBy: {
            args: Prisma.TradingRulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradingRulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradingRulesCountArgs<ExtArgs>
            result: $Utils.Optional<TradingRulesCountAggregateOutputType> | number
          }
        }
      }
      MentalProfile: {
        payload: Prisma.$MentalProfilePayload<ExtArgs>
        fields: Prisma.MentalProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MentalProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MentalProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>
          }
          findFirst: {
            args: Prisma.MentalProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MentalProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>
          }
          findMany: {
            args: Prisma.MentalProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>[]
          }
          create: {
            args: Prisma.MentalProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>
          }
          createMany: {
            args: Prisma.MentalProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MentalProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>[]
          }
          delete: {
            args: Prisma.MentalProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>
          }
          update: {
            args: Prisma.MentalProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>
          }
          deleteMany: {
            args: Prisma.MentalProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MentalProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MentalProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>[]
          }
          upsert: {
            args: Prisma.MentalProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MentalProfilePayload>
          }
          aggregate: {
            args: Prisma.MentalProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMentalProfile>
          }
          groupBy: {
            args: Prisma.MentalProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MentalProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MentalProfileCountArgs<ExtArgs>
            result: $Utils.Optional<MentalProfileCountAggregateOutputType> | number
          }
        }
      }
      CoachingPreferences: {
        payload: Prisma.$CoachingPreferencesPayload<ExtArgs>
        fields: Prisma.CoachingPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachingPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachingPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>
          }
          findFirst: {
            args: Prisma.CoachingPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachingPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>
          }
          findMany: {
            args: Prisma.CoachingPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>[]
          }
          create: {
            args: Prisma.CoachingPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>
          }
          createMany: {
            args: Prisma.CoachingPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachingPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>[]
          }
          delete: {
            args: Prisma.CoachingPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>
          }
          update: {
            args: Prisma.CoachingPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.CoachingPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachingPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachingPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.CoachingPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingPreferencesPayload>
          }
          aggregate: {
            args: Prisma.CoachingPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachingPreferences>
          }
          groupBy: {
            args: Prisma.CoachingPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachingPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachingPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<CoachingPreferencesCountAggregateOutputType> | number
          }
        }
      }
      NewsEvent: {
        payload: Prisma.$NewsEventPayload<ExtArgs>
        fields: Prisma.NewsEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>
          }
          findFirst: {
            args: Prisma.NewsEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>
          }
          findMany: {
            args: Prisma.NewsEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>[]
          }
          create: {
            args: Prisma.NewsEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>
          }
          createMany: {
            args: Prisma.NewsEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>[]
          }
          delete: {
            args: Prisma.NewsEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>
          }
          update: {
            args: Prisma.NewsEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>
          }
          deleteMany: {
            args: Prisma.NewsEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>[]
          }
          upsert: {
            args: Prisma.NewsEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsEventPayload>
          }
          aggregate: {
            args: Prisma.NewsEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsEvent>
          }
          groupBy: {
            args: Prisma.NewsEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsEventCountArgs<ExtArgs>
            result: $Utils.Optional<NewsEventCountAggregateOutputType> | number
          }
        }
      }
      SentNewsAlert: {
        payload: Prisma.$SentNewsAlertPayload<ExtArgs>
        fields: Prisma.SentNewsAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SentNewsAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SentNewsAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>
          }
          findFirst: {
            args: Prisma.SentNewsAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SentNewsAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>
          }
          findMany: {
            args: Prisma.SentNewsAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>[]
          }
          create: {
            args: Prisma.SentNewsAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>
          }
          createMany: {
            args: Prisma.SentNewsAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SentNewsAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>[]
          }
          delete: {
            args: Prisma.SentNewsAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>
          }
          update: {
            args: Prisma.SentNewsAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>
          }
          deleteMany: {
            args: Prisma.SentNewsAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SentNewsAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SentNewsAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>[]
          }
          upsert: {
            args: Prisma.SentNewsAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SentNewsAlertPayload>
          }
          aggregate: {
            args: Prisma.SentNewsAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSentNewsAlert>
          }
          groupBy: {
            args: Prisma.SentNewsAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<SentNewsAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.SentNewsAlertCountArgs<ExtArgs>
            result: $Utils.Optional<SentNewsAlertCountAggregateOutputType> | number
          }
        }
      }
      CoachingLog: {
        payload: Prisma.$CoachingLogPayload<ExtArgs>
        fields: Prisma.CoachingLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachingLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachingLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>
          }
          findFirst: {
            args: Prisma.CoachingLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachingLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>
          }
          findMany: {
            args: Prisma.CoachingLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>[]
          }
          create: {
            args: Prisma.CoachingLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>
          }
          createMany: {
            args: Prisma.CoachingLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachingLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>[]
          }
          delete: {
            args: Prisma.CoachingLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>
          }
          update: {
            args: Prisma.CoachingLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>
          }
          deleteMany: {
            args: Prisma.CoachingLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachingLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachingLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>[]
          }
          upsert: {
            args: Prisma.CoachingLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachingLogPayload>
          }
          aggregate: {
            args: Prisma.CoachingLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachingLog>
          }
          groupBy: {
            args: Prisma.CoachingLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachingLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachingLogCountArgs<ExtArgs>
            result: $Utils.Optional<CoachingLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    telegramConnection?: TelegramConnectionOmit
    traderProfile?: TraderProfileOmit
    riskRules?: RiskRulesOmit
    tradingRules?: TradingRulesOmit
    mentalProfile?: MentalProfileOmit
    coachingPreferences?: CoachingPreferencesOmit
    newsEvent?: NewsEventOmit
    sentNewsAlert?: SentNewsAlertOmit
    coachingLog?: CoachingLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentNewsAlerts: number
    coachingLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentNewsAlerts?: boolean | UserCountOutputTypeCountSentNewsAlertsArgs
    coachingLogs?: boolean | UserCountOutputTypeCountCoachingLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentNewsAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentNewsAlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoachingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingLogWhereInput
  }


  /**
   * Count Type NewsEventCountOutputType
   */

  export type NewsEventCountOutputType = {
    sentAlerts: number
  }

  export type NewsEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentAlerts?: boolean | NewsEventCountOutputTypeCountSentAlertsArgs
  }

  // Custom InputTypes
  /**
   * NewsEventCountOutputType without action
   */
  export type NewsEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEventCountOutputType
     */
    select?: NewsEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsEventCountOutputType without action
   */
  export type NewsEventCountOutputTypeCountSentAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentNewsAlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: string | null
    subscriptionStatus: $Enums.SubscriptionStatus | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    subscriptionStatus: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    subscriptionStatus?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string | null
    role: string
    subscriptionStatus: $Enums.SubscriptionStatus
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    telegramConnection?: boolean | User$telegramConnectionArgs<ExtArgs>
    traderProfile?: boolean | User$traderProfileArgs<ExtArgs>
    riskRules?: boolean | User$riskRulesArgs<ExtArgs>
    tradingRules?: boolean | User$tradingRulesArgs<ExtArgs>
    mentalProfile?: boolean | User$mentalProfileArgs<ExtArgs>
    coachingPreferences?: boolean | User$coachingPreferencesArgs<ExtArgs>
    sentNewsAlerts?: boolean | User$sentNewsAlertsArgs<ExtArgs>
    coachingLogs?: boolean | User$coachingLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    subscriptionStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "subscriptionStatus" | "stripeCustomerId" | "stripeSubscriptionId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telegramConnection?: boolean | User$telegramConnectionArgs<ExtArgs>
    traderProfile?: boolean | User$traderProfileArgs<ExtArgs>
    riskRules?: boolean | User$riskRulesArgs<ExtArgs>
    tradingRules?: boolean | User$tradingRulesArgs<ExtArgs>
    mentalProfile?: boolean | User$mentalProfileArgs<ExtArgs>
    coachingPreferences?: boolean | User$coachingPreferencesArgs<ExtArgs>
    sentNewsAlerts?: boolean | User$sentNewsAlertsArgs<ExtArgs>
    coachingLogs?: boolean | User$coachingLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      telegramConnection: Prisma.$TelegramConnectionPayload<ExtArgs> | null
      traderProfile: Prisma.$TraderProfilePayload<ExtArgs> | null
      riskRules: Prisma.$RiskRulesPayload<ExtArgs> | null
      tradingRules: Prisma.$TradingRulesPayload<ExtArgs> | null
      mentalProfile: Prisma.$MentalProfilePayload<ExtArgs> | null
      coachingPreferences: Prisma.$CoachingPreferencesPayload<ExtArgs> | null
      sentNewsAlerts: Prisma.$SentNewsAlertPayload<ExtArgs>[]
      coachingLogs: Prisma.$CoachingLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string | null
      role: string
      subscriptionStatus: $Enums.SubscriptionStatus
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telegramConnection<T extends User$telegramConnectionArgs<ExtArgs> = {}>(args?: Subset<T, User$telegramConnectionArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    traderProfile<T extends User$traderProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$traderProfileArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    riskRules<T extends User$riskRulesArgs<ExtArgs> = {}>(args?: Subset<T, User$riskRulesArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tradingRules<T extends User$tradingRulesArgs<ExtArgs> = {}>(args?: Subset<T, User$tradingRulesArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mentalProfile<T extends User$mentalProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$mentalProfileArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coachingPreferences<T extends User$coachingPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$coachingPreferencesArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sentNewsAlerts<T extends User$sentNewsAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentNewsAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coachingLogs<T extends User$coachingLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$coachingLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly subscriptionStatus: FieldRef<"User", 'SubscriptionStatus'>
    readonly stripeCustomerId: FieldRef<"User", 'String'>
    readonly stripeSubscriptionId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.telegramConnection
   */
  export type User$telegramConnectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    where?: TelegramConnectionWhereInput
  }

  /**
   * User.traderProfile
   */
  export type User$traderProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    where?: TraderProfileWhereInput
  }

  /**
   * User.riskRules
   */
  export type User$riskRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    where?: RiskRulesWhereInput
  }

  /**
   * User.tradingRules
   */
  export type User$tradingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    where?: TradingRulesWhereInput
  }

  /**
   * User.mentalProfile
   */
  export type User$mentalProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    where?: MentalProfileWhereInput
  }

  /**
   * User.coachingPreferences
   */
  export type User$coachingPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    where?: CoachingPreferencesWhereInput
  }

  /**
   * User.sentNewsAlerts
   */
  export type User$sentNewsAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    where?: SentNewsAlertWhereInput
    orderBy?: SentNewsAlertOrderByWithRelationInput | SentNewsAlertOrderByWithRelationInput[]
    cursor?: SentNewsAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentNewsAlertScalarFieldEnum | SentNewsAlertScalarFieldEnum[]
  }

  /**
   * User.coachingLogs
   */
  export type User$coachingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    where?: CoachingLogWhereInput
    orderBy?: CoachingLogOrderByWithRelationInput | CoachingLogOrderByWithRelationInput[]
    cursor?: CoachingLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachingLogScalarFieldEnum | CoachingLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TelegramConnection
   */

  export type AggregateTelegramConnection = {
    _count: TelegramConnectionCountAggregateOutputType | null
    _min: TelegramConnectionMinAggregateOutputType | null
    _max: TelegramConnectionMaxAggregateOutputType | null
  }

  export type TelegramConnectionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    telegramUserId: string | null
    telegramChatId: string | null
    botConnectedAt: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramConnectionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    telegramUserId: string | null
    telegramChatId: string | null
    botConnectedAt: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TelegramConnectionCountAggregateOutputType = {
    id: number
    userId: number
    telegramUserId: number
    telegramChatId: number
    botConnectedAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TelegramConnectionMinAggregateInputType = {
    id?: true
    userId?: true
    telegramUserId?: true
    telegramChatId?: true
    botConnectedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramConnectionMaxAggregateInputType = {
    id?: true
    userId?: true
    telegramUserId?: true
    telegramChatId?: true
    botConnectedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TelegramConnectionCountAggregateInputType = {
    id?: true
    userId?: true
    telegramUserId?: true
    telegramChatId?: true
    botConnectedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TelegramConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramConnection to aggregate.
     */
    where?: TelegramConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramConnections to fetch.
     */
    orderBy?: TelegramConnectionOrderByWithRelationInput | TelegramConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramConnections
    **/
    _count?: true | TelegramConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramConnectionMaxAggregateInputType
  }

  export type GetTelegramConnectionAggregateType<T extends TelegramConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramConnection[P]>
      : GetScalarType<T[P], AggregateTelegramConnection[P]>
  }




  export type TelegramConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramConnectionWhereInput
    orderBy?: TelegramConnectionOrderByWithAggregationInput | TelegramConnectionOrderByWithAggregationInput[]
    by: TelegramConnectionScalarFieldEnum[] | TelegramConnectionScalarFieldEnum
    having?: TelegramConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramConnectionCountAggregateInputType | true
    _min?: TelegramConnectionMinAggregateInputType
    _max?: TelegramConnectionMaxAggregateInputType
  }

  export type TelegramConnectionGroupByOutputType = {
    id: string
    userId: string
    telegramUserId: string
    telegramChatId: string
    botConnectedAt: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TelegramConnectionCountAggregateOutputType | null
    _min: TelegramConnectionMinAggregateOutputType | null
    _max: TelegramConnectionMaxAggregateOutputType | null
  }

  type GetTelegramConnectionGroupByPayload<T extends TelegramConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramConnectionGroupByOutputType[P]>
        }
      >
    >


  export type TelegramConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    telegramUserId?: boolean
    telegramChatId?: boolean
    botConnectedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramConnection"]>

  export type TelegramConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    telegramUserId?: boolean
    telegramChatId?: boolean
    botConnectedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramConnection"]>

  export type TelegramConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    telegramUserId?: boolean
    telegramChatId?: boolean
    botConnectedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramConnection"]>

  export type TelegramConnectionSelectScalar = {
    id?: boolean
    userId?: boolean
    telegramUserId?: boolean
    telegramChatId?: boolean
    botConnectedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TelegramConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "telegramUserId" | "telegramChatId" | "botConnectedAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["telegramConnection"]>
  export type TelegramConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TelegramConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TelegramConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TelegramConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramConnection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      telegramUserId: string
      telegramChatId: string
      botConnectedAt: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["telegramConnection"]>
    composites: {}
  }

  type TelegramConnectionGetPayload<S extends boolean | null | undefined | TelegramConnectionDefaultArgs> = $Result.GetResult<Prisma.$TelegramConnectionPayload, S>

  type TelegramConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramConnectionCountAggregateInputType | true
    }

  export interface TelegramConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramConnection'], meta: { name: 'TelegramConnection' } }
    /**
     * Find zero or one TelegramConnection that matches the filter.
     * @param {TelegramConnectionFindUniqueArgs} args - Arguments to find a TelegramConnection
     * @example
     * // Get one TelegramConnection
     * const telegramConnection = await prisma.telegramConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramConnectionFindUniqueArgs>(args: SelectSubset<T, TelegramConnectionFindUniqueArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramConnectionFindUniqueOrThrowArgs} args - Arguments to find a TelegramConnection
     * @example
     * // Get one TelegramConnection
     * const telegramConnection = await prisma.telegramConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConnectionFindFirstArgs} args - Arguments to find a TelegramConnection
     * @example
     * // Get one TelegramConnection
     * const telegramConnection = await prisma.telegramConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramConnectionFindFirstArgs>(args?: SelectSubset<T, TelegramConnectionFindFirstArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConnectionFindFirstOrThrowArgs} args - Arguments to find a TelegramConnection
     * @example
     * // Get one TelegramConnection
     * const telegramConnection = await prisma.telegramConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramConnections
     * const telegramConnections = await prisma.telegramConnection.findMany()
     * 
     * // Get first 10 TelegramConnections
     * const telegramConnections = await prisma.telegramConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramConnectionWithIdOnly = await prisma.telegramConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramConnectionFindManyArgs>(args?: SelectSubset<T, TelegramConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramConnection.
     * @param {TelegramConnectionCreateArgs} args - Arguments to create a TelegramConnection.
     * @example
     * // Create one TelegramConnection
     * const TelegramConnection = await prisma.telegramConnection.create({
     *   data: {
     *     // ... data to create a TelegramConnection
     *   }
     * })
     * 
     */
    create<T extends TelegramConnectionCreateArgs>(args: SelectSubset<T, TelegramConnectionCreateArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramConnections.
     * @param {TelegramConnectionCreateManyArgs} args - Arguments to create many TelegramConnections.
     * @example
     * // Create many TelegramConnections
     * const telegramConnection = await prisma.telegramConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramConnectionCreateManyArgs>(args?: SelectSubset<T, TelegramConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TelegramConnections and returns the data saved in the database.
     * @param {TelegramConnectionCreateManyAndReturnArgs} args - Arguments to create many TelegramConnections.
     * @example
     * // Create many TelegramConnections
     * const telegramConnection = await prisma.telegramConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TelegramConnections and only return the `id`
     * const telegramConnectionWithIdOnly = await prisma.telegramConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelegramConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, TelegramConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TelegramConnection.
     * @param {TelegramConnectionDeleteArgs} args - Arguments to delete one TelegramConnection.
     * @example
     * // Delete one TelegramConnection
     * const TelegramConnection = await prisma.telegramConnection.delete({
     *   where: {
     *     // ... filter to delete one TelegramConnection
     *   }
     * })
     * 
     */
    delete<T extends TelegramConnectionDeleteArgs>(args: SelectSubset<T, TelegramConnectionDeleteArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramConnection.
     * @param {TelegramConnectionUpdateArgs} args - Arguments to update one TelegramConnection.
     * @example
     * // Update one TelegramConnection
     * const telegramConnection = await prisma.telegramConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramConnectionUpdateArgs>(args: SelectSubset<T, TelegramConnectionUpdateArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramConnections.
     * @param {TelegramConnectionDeleteManyArgs} args - Arguments to filter TelegramConnections to delete.
     * @example
     * // Delete a few TelegramConnections
     * const { count } = await prisma.telegramConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramConnectionDeleteManyArgs>(args?: SelectSubset<T, TelegramConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramConnections
     * const telegramConnection = await prisma.telegramConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramConnectionUpdateManyArgs>(args: SelectSubset<T, TelegramConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramConnections and returns the data updated in the database.
     * @param {TelegramConnectionUpdateManyAndReturnArgs} args - Arguments to update many TelegramConnections.
     * @example
     * // Update many TelegramConnections
     * const telegramConnection = await prisma.telegramConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TelegramConnections and only return the `id`
     * const telegramConnectionWithIdOnly = await prisma.telegramConnection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelegramConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, TelegramConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TelegramConnection.
     * @param {TelegramConnectionUpsertArgs} args - Arguments to update or create a TelegramConnection.
     * @example
     * // Update or create a TelegramConnection
     * const telegramConnection = await prisma.telegramConnection.upsert({
     *   create: {
     *     // ... data to create a TelegramConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramConnection we want to update
     *   }
     * })
     */
    upsert<T extends TelegramConnectionUpsertArgs>(args: SelectSubset<T, TelegramConnectionUpsertArgs<ExtArgs>>): Prisma__TelegramConnectionClient<$Result.GetResult<Prisma.$TelegramConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TelegramConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConnectionCountArgs} args - Arguments to filter TelegramConnections to count.
     * @example
     * // Count the number of TelegramConnections
     * const count = await prisma.telegramConnection.count({
     *   where: {
     *     // ... the filter for the TelegramConnections we want to count
     *   }
     * })
    **/
    count<T extends TelegramConnectionCountArgs>(
      args?: Subset<T, TelegramConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelegramConnectionAggregateArgs>(args: Subset<T, TelegramConnectionAggregateArgs>): Prisma.PrismaPromise<GetTelegramConnectionAggregateType<T>>

    /**
     * Group by TelegramConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramConnectionGroupByArgs} args - Group by arguments.
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
      T extends TelegramConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramConnectionGroupByArgs['orderBy'] }
        : { orderBy?: TelegramConnectionGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelegramConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramConnection model
   */
  readonly fields: TelegramConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TelegramConnection model
   */
  interface TelegramConnectionFieldRefs {
    readonly id: FieldRef<"TelegramConnection", 'String'>
    readonly userId: FieldRef<"TelegramConnection", 'String'>
    readonly telegramUserId: FieldRef<"TelegramConnection", 'String'>
    readonly telegramChatId: FieldRef<"TelegramConnection", 'String'>
    readonly botConnectedAt: FieldRef<"TelegramConnection", 'DateTime'>
    readonly status: FieldRef<"TelegramConnection", 'String'>
    readonly createdAt: FieldRef<"TelegramConnection", 'DateTime'>
    readonly updatedAt: FieldRef<"TelegramConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramConnection findUnique
   */
  export type TelegramConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramConnection to fetch.
     */
    where: TelegramConnectionWhereUniqueInput
  }

  /**
   * TelegramConnection findUniqueOrThrow
   */
  export type TelegramConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramConnection to fetch.
     */
    where: TelegramConnectionWhereUniqueInput
  }

  /**
   * TelegramConnection findFirst
   */
  export type TelegramConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramConnection to fetch.
     */
    where?: TelegramConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramConnections to fetch.
     */
    orderBy?: TelegramConnectionOrderByWithRelationInput | TelegramConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramConnections.
     */
    cursor?: TelegramConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramConnections.
     */
    distinct?: TelegramConnectionScalarFieldEnum | TelegramConnectionScalarFieldEnum[]
  }

  /**
   * TelegramConnection findFirstOrThrow
   */
  export type TelegramConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramConnection to fetch.
     */
    where?: TelegramConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramConnections to fetch.
     */
    orderBy?: TelegramConnectionOrderByWithRelationInput | TelegramConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramConnections.
     */
    cursor?: TelegramConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramConnections.
     */
    distinct?: TelegramConnectionScalarFieldEnum | TelegramConnectionScalarFieldEnum[]
  }

  /**
   * TelegramConnection findMany
   */
  export type TelegramConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * Filter, which TelegramConnections to fetch.
     */
    where?: TelegramConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramConnections to fetch.
     */
    orderBy?: TelegramConnectionOrderByWithRelationInput | TelegramConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramConnections.
     */
    cursor?: TelegramConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramConnections.
     */
    distinct?: TelegramConnectionScalarFieldEnum | TelegramConnectionScalarFieldEnum[]
  }

  /**
   * TelegramConnection create
   */
  export type TelegramConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a TelegramConnection.
     */
    data: XOR<TelegramConnectionCreateInput, TelegramConnectionUncheckedCreateInput>
  }

  /**
   * TelegramConnection createMany
   */
  export type TelegramConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramConnections.
     */
    data: TelegramConnectionCreateManyInput | TelegramConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TelegramConnection createManyAndReturn
   */
  export type TelegramConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many TelegramConnections.
     */
    data: TelegramConnectionCreateManyInput | TelegramConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelegramConnection update
   */
  export type TelegramConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a TelegramConnection.
     */
    data: XOR<TelegramConnectionUpdateInput, TelegramConnectionUncheckedUpdateInput>
    /**
     * Choose, which TelegramConnection to update.
     */
    where: TelegramConnectionWhereUniqueInput
  }

  /**
   * TelegramConnection updateMany
   */
  export type TelegramConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramConnections.
     */
    data: XOR<TelegramConnectionUpdateManyMutationInput, TelegramConnectionUncheckedUpdateManyInput>
    /**
     * Filter which TelegramConnections to update
     */
    where?: TelegramConnectionWhereInput
    /**
     * Limit how many TelegramConnections to update.
     */
    limit?: number
  }

  /**
   * TelegramConnection updateManyAndReturn
   */
  export type TelegramConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * The data used to update TelegramConnections.
     */
    data: XOR<TelegramConnectionUpdateManyMutationInput, TelegramConnectionUncheckedUpdateManyInput>
    /**
     * Filter which TelegramConnections to update
     */
    where?: TelegramConnectionWhereInput
    /**
     * Limit how many TelegramConnections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TelegramConnection upsert
   */
  export type TelegramConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the TelegramConnection to update in case it exists.
     */
    where: TelegramConnectionWhereUniqueInput
    /**
     * In case the TelegramConnection found by the `where` argument doesn't exist, create a new TelegramConnection with this data.
     */
    create: XOR<TelegramConnectionCreateInput, TelegramConnectionUncheckedCreateInput>
    /**
     * In case the TelegramConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramConnectionUpdateInput, TelegramConnectionUncheckedUpdateInput>
  }

  /**
   * TelegramConnection delete
   */
  export type TelegramConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
    /**
     * Filter which TelegramConnection to delete.
     */
    where: TelegramConnectionWhereUniqueInput
  }

  /**
   * TelegramConnection deleteMany
   */
  export type TelegramConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramConnections to delete
     */
    where?: TelegramConnectionWhereInput
    /**
     * Limit how many TelegramConnections to delete.
     */
    limit?: number
  }

  /**
   * TelegramConnection without action
   */
  export type TelegramConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramConnection
     */
    select?: TelegramConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramConnection
     */
    omit?: TelegramConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramConnectionInclude<ExtArgs> | null
  }


  /**
   * Model TraderProfile
   */

  export type AggregateTraderProfile = {
    _count: TraderProfileCountAggregateOutputType | null
    _avg: TraderProfileAvgAggregateOutputType | null
    _sum: TraderProfileSumAggregateOutputType | null
    _min: TraderProfileMinAggregateOutputType | null
    _max: TraderProfileMaxAggregateOutputType | null
  }

  export type TraderProfileAvgAggregateOutputType = {
    experienceYears: number | null
  }

  export type TraderProfileSumAggregateOutputType = {
    experienceYears: number | null
  }

  export type TraderProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    market: string | null
    tradingStyle: $Enums.TradingStyle | null
    experienceYears: number | null
    tradingDays: string | null
    tradingSession: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TraderProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    market: string | null
    tradingStyle: $Enums.TradingStyle | null
    experienceYears: number | null
    tradingDays: string | null
    tradingSession: string | null
    timezone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TraderProfileCountAggregateOutputType = {
    id: number
    userId: number
    market: number
    tradingStyle: number
    experienceYears: number
    tradingDays: number
    tradingSession: number
    timezone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TraderProfileAvgAggregateInputType = {
    experienceYears?: true
  }

  export type TraderProfileSumAggregateInputType = {
    experienceYears?: true
  }

  export type TraderProfileMinAggregateInputType = {
    id?: true
    userId?: true
    market?: true
    tradingStyle?: true
    experienceYears?: true
    tradingDays?: true
    tradingSession?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TraderProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    market?: true
    tradingStyle?: true
    experienceYears?: true
    tradingDays?: true
    tradingSession?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TraderProfileCountAggregateInputType = {
    id?: true
    userId?: true
    market?: true
    tradingStyle?: true
    experienceYears?: true
    tradingDays?: true
    tradingSession?: true
    timezone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TraderProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TraderProfile to aggregate.
     */
    where?: TraderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraderProfiles to fetch.
     */
    orderBy?: TraderProfileOrderByWithRelationInput | TraderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TraderProfiles
    **/
    _count?: true | TraderProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TraderProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraderProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraderProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraderProfileMaxAggregateInputType
  }

  export type GetTraderProfileAggregateType<T extends TraderProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTraderProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTraderProfile[P]>
      : GetScalarType<T[P], AggregateTraderProfile[P]>
  }




  export type TraderProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraderProfileWhereInput
    orderBy?: TraderProfileOrderByWithAggregationInput | TraderProfileOrderByWithAggregationInput[]
    by: TraderProfileScalarFieldEnum[] | TraderProfileScalarFieldEnum
    having?: TraderProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraderProfileCountAggregateInputType | true
    _avg?: TraderProfileAvgAggregateInputType
    _sum?: TraderProfileSumAggregateInputType
    _min?: TraderProfileMinAggregateInputType
    _max?: TraderProfileMaxAggregateInputType
  }

  export type TraderProfileGroupByOutputType = {
    id: string
    userId: string
    market: string
    tradingStyle: $Enums.TradingStyle
    experienceYears: number
    tradingDays: string
    tradingSession: string
    timezone: string
    createdAt: Date
    updatedAt: Date
    _count: TraderProfileCountAggregateOutputType | null
    _avg: TraderProfileAvgAggregateOutputType | null
    _sum: TraderProfileSumAggregateOutputType | null
    _min: TraderProfileMinAggregateOutputType | null
    _max: TraderProfileMaxAggregateOutputType | null
  }

  type GetTraderProfileGroupByPayload<T extends TraderProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraderProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraderProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraderProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TraderProfileGroupByOutputType[P]>
        }
      >
    >


  export type TraderProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    market?: boolean
    tradingStyle?: boolean
    experienceYears?: boolean
    tradingDays?: boolean
    tradingSession?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["traderProfile"]>

  export type TraderProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    market?: boolean
    tradingStyle?: boolean
    experienceYears?: boolean
    tradingDays?: boolean
    tradingSession?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["traderProfile"]>

  export type TraderProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    market?: boolean
    tradingStyle?: boolean
    experienceYears?: boolean
    tradingDays?: boolean
    tradingSession?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["traderProfile"]>

  export type TraderProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    market?: boolean
    tradingStyle?: boolean
    experienceYears?: boolean
    tradingDays?: boolean
    tradingSession?: boolean
    timezone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TraderProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "market" | "tradingStyle" | "experienceYears" | "tradingDays" | "tradingSession" | "timezone" | "createdAt" | "updatedAt", ExtArgs["result"]["traderProfile"]>
  export type TraderProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TraderProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TraderProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TraderProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TraderProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      market: string
      tradingStyle: $Enums.TradingStyle
      experienceYears: number
      tradingDays: string
      tradingSession: string
      timezone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["traderProfile"]>
    composites: {}
  }

  type TraderProfileGetPayload<S extends boolean | null | undefined | TraderProfileDefaultArgs> = $Result.GetResult<Prisma.$TraderProfilePayload, S>

  type TraderProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraderProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraderProfileCountAggregateInputType | true
    }

  export interface TraderProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TraderProfile'], meta: { name: 'TraderProfile' } }
    /**
     * Find zero or one TraderProfile that matches the filter.
     * @param {TraderProfileFindUniqueArgs} args - Arguments to find a TraderProfile
     * @example
     * // Get one TraderProfile
     * const traderProfile = await prisma.traderProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraderProfileFindUniqueArgs>(args: SelectSubset<T, TraderProfileFindUniqueArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TraderProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraderProfileFindUniqueOrThrowArgs} args - Arguments to find a TraderProfile
     * @example
     * // Get one TraderProfile
     * const traderProfile = await prisma.traderProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraderProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TraderProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TraderProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileFindFirstArgs} args - Arguments to find a TraderProfile
     * @example
     * // Get one TraderProfile
     * const traderProfile = await prisma.traderProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraderProfileFindFirstArgs>(args?: SelectSubset<T, TraderProfileFindFirstArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TraderProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileFindFirstOrThrowArgs} args - Arguments to find a TraderProfile
     * @example
     * // Get one TraderProfile
     * const traderProfile = await prisma.traderProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraderProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TraderProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TraderProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TraderProfiles
     * const traderProfiles = await prisma.traderProfile.findMany()
     * 
     * // Get first 10 TraderProfiles
     * const traderProfiles = await prisma.traderProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traderProfileWithIdOnly = await prisma.traderProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TraderProfileFindManyArgs>(args?: SelectSubset<T, TraderProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TraderProfile.
     * @param {TraderProfileCreateArgs} args - Arguments to create a TraderProfile.
     * @example
     * // Create one TraderProfile
     * const TraderProfile = await prisma.traderProfile.create({
     *   data: {
     *     // ... data to create a TraderProfile
     *   }
     * })
     * 
     */
    create<T extends TraderProfileCreateArgs>(args: SelectSubset<T, TraderProfileCreateArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TraderProfiles.
     * @param {TraderProfileCreateManyArgs} args - Arguments to create many TraderProfiles.
     * @example
     * // Create many TraderProfiles
     * const traderProfile = await prisma.traderProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraderProfileCreateManyArgs>(args?: SelectSubset<T, TraderProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TraderProfiles and returns the data saved in the database.
     * @param {TraderProfileCreateManyAndReturnArgs} args - Arguments to create many TraderProfiles.
     * @example
     * // Create many TraderProfiles
     * const traderProfile = await prisma.traderProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TraderProfiles and only return the `id`
     * const traderProfileWithIdOnly = await prisma.traderProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TraderProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TraderProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TraderProfile.
     * @param {TraderProfileDeleteArgs} args - Arguments to delete one TraderProfile.
     * @example
     * // Delete one TraderProfile
     * const TraderProfile = await prisma.traderProfile.delete({
     *   where: {
     *     // ... filter to delete one TraderProfile
     *   }
     * })
     * 
     */
    delete<T extends TraderProfileDeleteArgs>(args: SelectSubset<T, TraderProfileDeleteArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TraderProfile.
     * @param {TraderProfileUpdateArgs} args - Arguments to update one TraderProfile.
     * @example
     * // Update one TraderProfile
     * const traderProfile = await prisma.traderProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraderProfileUpdateArgs>(args: SelectSubset<T, TraderProfileUpdateArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TraderProfiles.
     * @param {TraderProfileDeleteManyArgs} args - Arguments to filter TraderProfiles to delete.
     * @example
     * // Delete a few TraderProfiles
     * const { count } = await prisma.traderProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraderProfileDeleteManyArgs>(args?: SelectSubset<T, TraderProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TraderProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TraderProfiles
     * const traderProfile = await prisma.traderProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraderProfileUpdateManyArgs>(args: SelectSubset<T, TraderProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TraderProfiles and returns the data updated in the database.
     * @param {TraderProfileUpdateManyAndReturnArgs} args - Arguments to update many TraderProfiles.
     * @example
     * // Update many TraderProfiles
     * const traderProfile = await prisma.traderProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TraderProfiles and only return the `id`
     * const traderProfileWithIdOnly = await prisma.traderProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TraderProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TraderProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TraderProfile.
     * @param {TraderProfileUpsertArgs} args - Arguments to update or create a TraderProfile.
     * @example
     * // Update or create a TraderProfile
     * const traderProfile = await prisma.traderProfile.upsert({
     *   create: {
     *     // ... data to create a TraderProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TraderProfile we want to update
     *   }
     * })
     */
    upsert<T extends TraderProfileUpsertArgs>(args: SelectSubset<T, TraderProfileUpsertArgs<ExtArgs>>): Prisma__TraderProfileClient<$Result.GetResult<Prisma.$TraderProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TraderProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileCountArgs} args - Arguments to filter TraderProfiles to count.
     * @example
     * // Count the number of TraderProfiles
     * const count = await prisma.traderProfile.count({
     *   where: {
     *     // ... the filter for the TraderProfiles we want to count
     *   }
     * })
    **/
    count<T extends TraderProfileCountArgs>(
      args?: Subset<T, TraderProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraderProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TraderProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TraderProfileAggregateArgs>(args: Subset<T, TraderProfileAggregateArgs>): Prisma.PrismaPromise<GetTraderProfileAggregateType<T>>

    /**
     * Group by TraderProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraderProfileGroupByArgs} args - Group by arguments.
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
      T extends TraderProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraderProfileGroupByArgs['orderBy'] }
        : { orderBy?: TraderProfileGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TraderProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraderProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TraderProfile model
   */
  readonly fields: TraderProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TraderProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraderProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TraderProfile model
   */
  interface TraderProfileFieldRefs {
    readonly id: FieldRef<"TraderProfile", 'String'>
    readonly userId: FieldRef<"TraderProfile", 'String'>
    readonly market: FieldRef<"TraderProfile", 'String'>
    readonly tradingStyle: FieldRef<"TraderProfile", 'TradingStyle'>
    readonly experienceYears: FieldRef<"TraderProfile", 'Int'>
    readonly tradingDays: FieldRef<"TraderProfile", 'String'>
    readonly tradingSession: FieldRef<"TraderProfile", 'String'>
    readonly timezone: FieldRef<"TraderProfile", 'String'>
    readonly createdAt: FieldRef<"TraderProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"TraderProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TraderProfile findUnique
   */
  export type TraderProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * Filter, which TraderProfile to fetch.
     */
    where: TraderProfileWhereUniqueInput
  }

  /**
   * TraderProfile findUniqueOrThrow
   */
  export type TraderProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * Filter, which TraderProfile to fetch.
     */
    where: TraderProfileWhereUniqueInput
  }

  /**
   * TraderProfile findFirst
   */
  export type TraderProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * Filter, which TraderProfile to fetch.
     */
    where?: TraderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraderProfiles to fetch.
     */
    orderBy?: TraderProfileOrderByWithRelationInput | TraderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TraderProfiles.
     */
    cursor?: TraderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TraderProfiles.
     */
    distinct?: TraderProfileScalarFieldEnum | TraderProfileScalarFieldEnum[]
  }

  /**
   * TraderProfile findFirstOrThrow
   */
  export type TraderProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * Filter, which TraderProfile to fetch.
     */
    where?: TraderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraderProfiles to fetch.
     */
    orderBy?: TraderProfileOrderByWithRelationInput | TraderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TraderProfiles.
     */
    cursor?: TraderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TraderProfiles.
     */
    distinct?: TraderProfileScalarFieldEnum | TraderProfileScalarFieldEnum[]
  }

  /**
   * TraderProfile findMany
   */
  export type TraderProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * Filter, which TraderProfiles to fetch.
     */
    where?: TraderProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraderProfiles to fetch.
     */
    orderBy?: TraderProfileOrderByWithRelationInput | TraderProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TraderProfiles.
     */
    cursor?: TraderProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraderProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraderProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TraderProfiles.
     */
    distinct?: TraderProfileScalarFieldEnum | TraderProfileScalarFieldEnum[]
  }

  /**
   * TraderProfile create
   */
  export type TraderProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TraderProfile.
     */
    data: XOR<TraderProfileCreateInput, TraderProfileUncheckedCreateInput>
  }

  /**
   * TraderProfile createMany
   */
  export type TraderProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TraderProfiles.
     */
    data: TraderProfileCreateManyInput | TraderProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TraderProfile createManyAndReturn
   */
  export type TraderProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TraderProfiles.
     */
    data: TraderProfileCreateManyInput | TraderProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TraderProfile update
   */
  export type TraderProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TraderProfile.
     */
    data: XOR<TraderProfileUpdateInput, TraderProfileUncheckedUpdateInput>
    /**
     * Choose, which TraderProfile to update.
     */
    where: TraderProfileWhereUniqueInput
  }

  /**
   * TraderProfile updateMany
   */
  export type TraderProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TraderProfiles.
     */
    data: XOR<TraderProfileUpdateManyMutationInput, TraderProfileUncheckedUpdateManyInput>
    /**
     * Filter which TraderProfiles to update
     */
    where?: TraderProfileWhereInput
    /**
     * Limit how many TraderProfiles to update.
     */
    limit?: number
  }

  /**
   * TraderProfile updateManyAndReturn
   */
  export type TraderProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * The data used to update TraderProfiles.
     */
    data: XOR<TraderProfileUpdateManyMutationInput, TraderProfileUncheckedUpdateManyInput>
    /**
     * Filter which TraderProfiles to update
     */
    where?: TraderProfileWhereInput
    /**
     * Limit how many TraderProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TraderProfile upsert
   */
  export type TraderProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TraderProfile to update in case it exists.
     */
    where: TraderProfileWhereUniqueInput
    /**
     * In case the TraderProfile found by the `where` argument doesn't exist, create a new TraderProfile with this data.
     */
    create: XOR<TraderProfileCreateInput, TraderProfileUncheckedCreateInput>
    /**
     * In case the TraderProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraderProfileUpdateInput, TraderProfileUncheckedUpdateInput>
  }

  /**
   * TraderProfile delete
   */
  export type TraderProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
    /**
     * Filter which TraderProfile to delete.
     */
    where: TraderProfileWhereUniqueInput
  }

  /**
   * TraderProfile deleteMany
   */
  export type TraderProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TraderProfiles to delete
     */
    where?: TraderProfileWhereInput
    /**
     * Limit how many TraderProfiles to delete.
     */
    limit?: number
  }

  /**
   * TraderProfile without action
   */
  export type TraderProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraderProfile
     */
    select?: TraderProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraderProfile
     */
    omit?: TraderProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TraderProfileInclude<ExtArgs> | null
  }


  /**
   * Model RiskRules
   */

  export type AggregateRiskRules = {
    _count: RiskRulesCountAggregateOutputType | null
    _avg: RiskRulesAvgAggregateOutputType | null
    _sum: RiskRulesSumAggregateOutputType | null
    _min: RiskRulesMinAggregateOutputType | null
    _max: RiskRulesMaxAggregateOutputType | null
  }

  export type RiskRulesAvgAggregateOutputType = {
    accountSize: number | null
    dailyLossLimit: number | null
    riskPerTrade: number | null
    maxTradesPerDay: number | null
    stopAfterLosses: number | null
  }

  export type RiskRulesSumAggregateOutputType = {
    accountSize: number | null
    dailyLossLimit: number | null
    riskPerTrade: number | null
    maxTradesPerDay: number | null
    stopAfterLosses: number | null
  }

  export type RiskRulesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accountSize: number | null
    dailyLossLimit: number | null
    riskPerTrade: number | null
    maxTradesPerDay: number | null
    stopAfterLosses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskRulesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accountSize: number | null
    dailyLossLimit: number | null
    riskPerTrade: number | null
    maxTradesPerDay: number | null
    stopAfterLosses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiskRulesCountAggregateOutputType = {
    id: number
    userId: number
    accountSize: number
    dailyLossLimit: number
    riskPerTrade: number
    maxTradesPerDay: number
    stopAfterLosses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiskRulesAvgAggregateInputType = {
    accountSize?: true
    dailyLossLimit?: true
    riskPerTrade?: true
    maxTradesPerDay?: true
    stopAfterLosses?: true
  }

  export type RiskRulesSumAggregateInputType = {
    accountSize?: true
    dailyLossLimit?: true
    riskPerTrade?: true
    maxTradesPerDay?: true
    stopAfterLosses?: true
  }

  export type RiskRulesMinAggregateInputType = {
    id?: true
    userId?: true
    accountSize?: true
    dailyLossLimit?: true
    riskPerTrade?: true
    maxTradesPerDay?: true
    stopAfterLosses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskRulesMaxAggregateInputType = {
    id?: true
    userId?: true
    accountSize?: true
    dailyLossLimit?: true
    riskPerTrade?: true
    maxTradesPerDay?: true
    stopAfterLosses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiskRulesCountAggregateInputType = {
    id?: true
    userId?: true
    accountSize?: true
    dailyLossLimit?: true
    riskPerTrade?: true
    maxTradesPerDay?: true
    stopAfterLosses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiskRulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskRules to aggregate.
     */
    where?: RiskRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskRules to fetch.
     */
    orderBy?: RiskRulesOrderByWithRelationInput | RiskRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiskRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RiskRules
    **/
    _count?: true | RiskRulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiskRulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiskRulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiskRulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiskRulesMaxAggregateInputType
  }

  export type GetRiskRulesAggregateType<T extends RiskRulesAggregateArgs> = {
        [P in keyof T & keyof AggregateRiskRules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiskRules[P]>
      : GetScalarType<T[P], AggregateRiskRules[P]>
  }




  export type RiskRulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiskRulesWhereInput
    orderBy?: RiskRulesOrderByWithAggregationInput | RiskRulesOrderByWithAggregationInput[]
    by: RiskRulesScalarFieldEnum[] | RiskRulesScalarFieldEnum
    having?: RiskRulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiskRulesCountAggregateInputType | true
    _avg?: RiskRulesAvgAggregateInputType
    _sum?: RiskRulesSumAggregateInputType
    _min?: RiskRulesMinAggregateInputType
    _max?: RiskRulesMaxAggregateInputType
  }

  export type RiskRulesGroupByOutputType = {
    id: string
    userId: string
    accountSize: number
    dailyLossLimit: number
    riskPerTrade: number
    maxTradesPerDay: number
    stopAfterLosses: number
    createdAt: Date
    updatedAt: Date
    _count: RiskRulesCountAggregateOutputType | null
    _avg: RiskRulesAvgAggregateOutputType | null
    _sum: RiskRulesSumAggregateOutputType | null
    _min: RiskRulesMinAggregateOutputType | null
    _max: RiskRulesMaxAggregateOutputType | null
  }

  type GetRiskRulesGroupByPayload<T extends RiskRulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiskRulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiskRulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiskRulesGroupByOutputType[P]>
            : GetScalarType<T[P], RiskRulesGroupByOutputType[P]>
        }
      >
    >


  export type RiskRulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountSize?: boolean
    dailyLossLimit?: boolean
    riskPerTrade?: boolean
    maxTradesPerDay?: boolean
    stopAfterLosses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskRules"]>

  export type RiskRulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountSize?: boolean
    dailyLossLimit?: boolean
    riskPerTrade?: boolean
    maxTradesPerDay?: boolean
    stopAfterLosses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskRules"]>

  export type RiskRulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accountSize?: boolean
    dailyLossLimit?: boolean
    riskPerTrade?: boolean
    maxTradesPerDay?: boolean
    stopAfterLosses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["riskRules"]>

  export type RiskRulesSelectScalar = {
    id?: boolean
    userId?: boolean
    accountSize?: boolean
    dailyLossLimit?: boolean
    riskPerTrade?: boolean
    maxTradesPerDay?: boolean
    stopAfterLosses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiskRulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "accountSize" | "dailyLossLimit" | "riskPerTrade" | "maxTradesPerDay" | "stopAfterLosses" | "createdAt" | "updatedAt", ExtArgs["result"]["riskRules"]>
  export type RiskRulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RiskRulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RiskRulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RiskRulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RiskRules"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accountSize: number
      dailyLossLimit: number
      riskPerTrade: number
      maxTradesPerDay: number
      stopAfterLosses: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["riskRules"]>
    composites: {}
  }

  type RiskRulesGetPayload<S extends boolean | null | undefined | RiskRulesDefaultArgs> = $Result.GetResult<Prisma.$RiskRulesPayload, S>

  type RiskRulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiskRulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiskRulesCountAggregateInputType | true
    }

  export interface RiskRulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RiskRules'], meta: { name: 'RiskRules' } }
    /**
     * Find zero or one RiskRules that matches the filter.
     * @param {RiskRulesFindUniqueArgs} args - Arguments to find a RiskRules
     * @example
     * // Get one RiskRules
     * const riskRules = await prisma.riskRules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiskRulesFindUniqueArgs>(args: SelectSubset<T, RiskRulesFindUniqueArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RiskRules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiskRulesFindUniqueOrThrowArgs} args - Arguments to find a RiskRules
     * @example
     * // Get one RiskRules
     * const riskRules = await prisma.riskRules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiskRulesFindUniqueOrThrowArgs>(args: SelectSubset<T, RiskRulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRulesFindFirstArgs} args - Arguments to find a RiskRules
     * @example
     * // Get one RiskRules
     * const riskRules = await prisma.riskRules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiskRulesFindFirstArgs>(args?: SelectSubset<T, RiskRulesFindFirstArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RiskRules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRulesFindFirstOrThrowArgs} args - Arguments to find a RiskRules
     * @example
     * // Get one RiskRules
     * const riskRules = await prisma.riskRules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiskRulesFindFirstOrThrowArgs>(args?: SelectSubset<T, RiskRulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RiskRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RiskRules
     * const riskRules = await prisma.riskRules.findMany()
     * 
     * // Get first 10 RiskRules
     * const riskRules = await prisma.riskRules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riskRulesWithIdOnly = await prisma.riskRules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiskRulesFindManyArgs>(args?: SelectSubset<T, RiskRulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RiskRules.
     * @param {RiskRulesCreateArgs} args - Arguments to create a RiskRules.
     * @example
     * // Create one RiskRules
     * const RiskRules = await prisma.riskRules.create({
     *   data: {
     *     // ... data to create a RiskRules
     *   }
     * })
     * 
     */
    create<T extends RiskRulesCreateArgs>(args: SelectSubset<T, RiskRulesCreateArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RiskRules.
     * @param {RiskRulesCreateManyArgs} args - Arguments to create many RiskRules.
     * @example
     * // Create many RiskRules
     * const riskRules = await prisma.riskRules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiskRulesCreateManyArgs>(args?: SelectSubset<T, RiskRulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RiskRules and returns the data saved in the database.
     * @param {RiskRulesCreateManyAndReturnArgs} args - Arguments to create many RiskRules.
     * @example
     * // Create many RiskRules
     * const riskRules = await prisma.riskRules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RiskRules and only return the `id`
     * const riskRulesWithIdOnly = await prisma.riskRules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiskRulesCreateManyAndReturnArgs>(args?: SelectSubset<T, RiskRulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RiskRules.
     * @param {RiskRulesDeleteArgs} args - Arguments to delete one RiskRules.
     * @example
     * // Delete one RiskRules
     * const RiskRules = await prisma.riskRules.delete({
     *   where: {
     *     // ... filter to delete one RiskRules
     *   }
     * })
     * 
     */
    delete<T extends RiskRulesDeleteArgs>(args: SelectSubset<T, RiskRulesDeleteArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RiskRules.
     * @param {RiskRulesUpdateArgs} args - Arguments to update one RiskRules.
     * @example
     * // Update one RiskRules
     * const riskRules = await prisma.riskRules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiskRulesUpdateArgs>(args: SelectSubset<T, RiskRulesUpdateArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RiskRules.
     * @param {RiskRulesDeleteManyArgs} args - Arguments to filter RiskRules to delete.
     * @example
     * // Delete a few RiskRules
     * const { count } = await prisma.riskRules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiskRulesDeleteManyArgs>(args?: SelectSubset<T, RiskRulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RiskRules
     * const riskRules = await prisma.riskRules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiskRulesUpdateManyArgs>(args: SelectSubset<T, RiskRulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RiskRules and returns the data updated in the database.
     * @param {RiskRulesUpdateManyAndReturnArgs} args - Arguments to update many RiskRules.
     * @example
     * // Update many RiskRules
     * const riskRules = await prisma.riskRules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RiskRules and only return the `id`
     * const riskRulesWithIdOnly = await prisma.riskRules.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiskRulesUpdateManyAndReturnArgs>(args: SelectSubset<T, RiskRulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RiskRules.
     * @param {RiskRulesUpsertArgs} args - Arguments to update or create a RiskRules.
     * @example
     * // Update or create a RiskRules
     * const riskRules = await prisma.riskRules.upsert({
     *   create: {
     *     // ... data to create a RiskRules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RiskRules we want to update
     *   }
     * })
     */
    upsert<T extends RiskRulesUpsertArgs>(args: SelectSubset<T, RiskRulesUpsertArgs<ExtArgs>>): Prisma__RiskRulesClient<$Result.GetResult<Prisma.$RiskRulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RiskRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRulesCountArgs} args - Arguments to filter RiskRules to count.
     * @example
     * // Count the number of RiskRules
     * const count = await prisma.riskRules.count({
     *   where: {
     *     // ... the filter for the RiskRules we want to count
     *   }
     * })
    **/
    count<T extends RiskRulesCountArgs>(
      args?: Subset<T, RiskRulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiskRulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RiskRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RiskRulesAggregateArgs>(args: Subset<T, RiskRulesAggregateArgs>): Prisma.PrismaPromise<GetRiskRulesAggregateType<T>>

    /**
     * Group by RiskRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiskRulesGroupByArgs} args - Group by arguments.
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
      T extends RiskRulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiskRulesGroupByArgs['orderBy'] }
        : { orderBy?: RiskRulesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiskRulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskRulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RiskRules model
   */
  readonly fields: RiskRulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RiskRules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiskRulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RiskRules model
   */
  interface RiskRulesFieldRefs {
    readonly id: FieldRef<"RiskRules", 'String'>
    readonly userId: FieldRef<"RiskRules", 'String'>
    readonly accountSize: FieldRef<"RiskRules", 'Int'>
    readonly dailyLossLimit: FieldRef<"RiskRules", 'Int'>
    readonly riskPerTrade: FieldRef<"RiskRules", 'Int'>
    readonly maxTradesPerDay: FieldRef<"RiskRules", 'Int'>
    readonly stopAfterLosses: FieldRef<"RiskRules", 'Int'>
    readonly createdAt: FieldRef<"RiskRules", 'DateTime'>
    readonly updatedAt: FieldRef<"RiskRules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RiskRules findUnique
   */
  export type RiskRulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * Filter, which RiskRules to fetch.
     */
    where: RiskRulesWhereUniqueInput
  }

  /**
   * RiskRules findUniqueOrThrow
   */
  export type RiskRulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * Filter, which RiskRules to fetch.
     */
    where: RiskRulesWhereUniqueInput
  }

  /**
   * RiskRules findFirst
   */
  export type RiskRulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * Filter, which RiskRules to fetch.
     */
    where?: RiskRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskRules to fetch.
     */
    orderBy?: RiskRulesOrderByWithRelationInput | RiskRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskRules.
     */
    cursor?: RiskRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskRules.
     */
    distinct?: RiskRulesScalarFieldEnum | RiskRulesScalarFieldEnum[]
  }

  /**
   * RiskRules findFirstOrThrow
   */
  export type RiskRulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * Filter, which RiskRules to fetch.
     */
    where?: RiskRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskRules to fetch.
     */
    orderBy?: RiskRulesOrderByWithRelationInput | RiskRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RiskRules.
     */
    cursor?: RiskRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskRules.
     */
    distinct?: RiskRulesScalarFieldEnum | RiskRulesScalarFieldEnum[]
  }

  /**
   * RiskRules findMany
   */
  export type RiskRulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * Filter, which RiskRules to fetch.
     */
    where?: RiskRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RiskRules to fetch.
     */
    orderBy?: RiskRulesOrderByWithRelationInput | RiskRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RiskRules.
     */
    cursor?: RiskRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RiskRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RiskRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RiskRules.
     */
    distinct?: RiskRulesScalarFieldEnum | RiskRulesScalarFieldEnum[]
  }

  /**
   * RiskRules create
   */
  export type RiskRulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * The data needed to create a RiskRules.
     */
    data: XOR<RiskRulesCreateInput, RiskRulesUncheckedCreateInput>
  }

  /**
   * RiskRules createMany
   */
  export type RiskRulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RiskRules.
     */
    data: RiskRulesCreateManyInput | RiskRulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RiskRules createManyAndReturn
   */
  export type RiskRulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * The data used to create many RiskRules.
     */
    data: RiskRulesCreateManyInput | RiskRulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskRules update
   */
  export type RiskRulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * The data needed to update a RiskRules.
     */
    data: XOR<RiskRulesUpdateInput, RiskRulesUncheckedUpdateInput>
    /**
     * Choose, which RiskRules to update.
     */
    where: RiskRulesWhereUniqueInput
  }

  /**
   * RiskRules updateMany
   */
  export type RiskRulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RiskRules.
     */
    data: XOR<RiskRulesUpdateManyMutationInput, RiskRulesUncheckedUpdateManyInput>
    /**
     * Filter which RiskRules to update
     */
    where?: RiskRulesWhereInput
    /**
     * Limit how many RiskRules to update.
     */
    limit?: number
  }

  /**
   * RiskRules updateManyAndReturn
   */
  export type RiskRulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * The data used to update RiskRules.
     */
    data: XOR<RiskRulesUpdateManyMutationInput, RiskRulesUncheckedUpdateManyInput>
    /**
     * Filter which RiskRules to update
     */
    where?: RiskRulesWhereInput
    /**
     * Limit how many RiskRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RiskRules upsert
   */
  export type RiskRulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * The filter to search for the RiskRules to update in case it exists.
     */
    where: RiskRulesWhereUniqueInput
    /**
     * In case the RiskRules found by the `where` argument doesn't exist, create a new RiskRules with this data.
     */
    create: XOR<RiskRulesCreateInput, RiskRulesUncheckedCreateInput>
    /**
     * In case the RiskRules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiskRulesUpdateInput, RiskRulesUncheckedUpdateInput>
  }

  /**
   * RiskRules delete
   */
  export type RiskRulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
    /**
     * Filter which RiskRules to delete.
     */
    where: RiskRulesWhereUniqueInput
  }

  /**
   * RiskRules deleteMany
   */
  export type RiskRulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RiskRules to delete
     */
    where?: RiskRulesWhereInput
    /**
     * Limit how many RiskRules to delete.
     */
    limit?: number
  }

  /**
   * RiskRules without action
   */
  export type RiskRulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiskRules
     */
    select?: RiskRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RiskRules
     */
    omit?: RiskRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiskRulesInclude<ExtArgs> | null
  }


  /**
   * Model TradingRules
   */

  export type AggregateTradingRules = {
    _count: TradingRulesCountAggregateOutputType | null
    _min: TradingRulesMinAggregateOutputType | null
    _max: TradingRulesMaxAggregateOutputType | null
  }

  export type TradingRulesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    allowedSetups: string | null
    forbiddenConditions: string | null
    requiredBeforeEntry: string | null
    invalidationRules: string | null
    allowedHours: string | null
    forbiddenHours: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradingRulesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    allowedSetups: string | null
    forbiddenConditions: string | null
    requiredBeforeEntry: string | null
    invalidationRules: string | null
    allowedHours: string | null
    forbiddenHours: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TradingRulesCountAggregateOutputType = {
    id: number
    userId: number
    allowedSetups: number
    forbiddenConditions: number
    requiredBeforeEntry: number
    invalidationRules: number
    allowedHours: number
    forbiddenHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TradingRulesMinAggregateInputType = {
    id?: true
    userId?: true
    allowedSetups?: true
    forbiddenConditions?: true
    requiredBeforeEntry?: true
    invalidationRules?: true
    allowedHours?: true
    forbiddenHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradingRulesMaxAggregateInputType = {
    id?: true
    userId?: true
    allowedSetups?: true
    forbiddenConditions?: true
    requiredBeforeEntry?: true
    invalidationRules?: true
    allowedHours?: true
    forbiddenHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TradingRulesCountAggregateInputType = {
    id?: true
    userId?: true
    allowedSetups?: true
    forbiddenConditions?: true
    requiredBeforeEntry?: true
    invalidationRules?: true
    allowedHours?: true
    forbiddenHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TradingRulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradingRules to aggregate.
     */
    where?: TradingRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingRules to fetch.
     */
    orderBy?: TradingRulesOrderByWithRelationInput | TradingRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradingRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TradingRules
    **/
    _count?: true | TradingRulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradingRulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradingRulesMaxAggregateInputType
  }

  export type GetTradingRulesAggregateType<T extends TradingRulesAggregateArgs> = {
        [P in keyof T & keyof AggregateTradingRules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradingRules[P]>
      : GetScalarType<T[P], AggregateTradingRules[P]>
  }




  export type TradingRulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradingRulesWhereInput
    orderBy?: TradingRulesOrderByWithAggregationInput | TradingRulesOrderByWithAggregationInput[]
    by: TradingRulesScalarFieldEnum[] | TradingRulesScalarFieldEnum
    having?: TradingRulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradingRulesCountAggregateInputType | true
    _min?: TradingRulesMinAggregateInputType
    _max?: TradingRulesMaxAggregateInputType
  }

  export type TradingRulesGroupByOutputType = {
    id: string
    userId: string
    allowedSetups: string
    forbiddenConditions: string
    requiredBeforeEntry: string
    invalidationRules: string
    allowedHours: string
    forbiddenHours: string
    createdAt: Date
    updatedAt: Date
    _count: TradingRulesCountAggregateOutputType | null
    _min: TradingRulesMinAggregateOutputType | null
    _max: TradingRulesMaxAggregateOutputType | null
  }

  type GetTradingRulesGroupByPayload<T extends TradingRulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradingRulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradingRulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradingRulesGroupByOutputType[P]>
            : GetScalarType<T[P], TradingRulesGroupByOutputType[P]>
        }
      >
    >


  export type TradingRulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allowedSetups?: boolean
    forbiddenConditions?: boolean
    requiredBeforeEntry?: boolean
    invalidationRules?: boolean
    allowedHours?: boolean
    forbiddenHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingRules"]>

  export type TradingRulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allowedSetups?: boolean
    forbiddenConditions?: boolean
    requiredBeforeEntry?: boolean
    invalidationRules?: boolean
    allowedHours?: boolean
    forbiddenHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingRules"]>

  export type TradingRulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    allowedSetups?: boolean
    forbiddenConditions?: boolean
    requiredBeforeEntry?: boolean
    invalidationRules?: boolean
    allowedHours?: boolean
    forbiddenHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tradingRules"]>

  export type TradingRulesSelectScalar = {
    id?: boolean
    userId?: boolean
    allowedSetups?: boolean
    forbiddenConditions?: boolean
    requiredBeforeEntry?: boolean
    invalidationRules?: boolean
    allowedHours?: boolean
    forbiddenHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TradingRulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "allowedSetups" | "forbiddenConditions" | "requiredBeforeEntry" | "invalidationRules" | "allowedHours" | "forbiddenHours" | "createdAt" | "updatedAt", ExtArgs["result"]["tradingRules"]>
  export type TradingRulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TradingRulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TradingRulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TradingRulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TradingRules"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      allowedSetups: string
      forbiddenConditions: string
      requiredBeforeEntry: string
      invalidationRules: string
      allowedHours: string
      forbiddenHours: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tradingRules"]>
    composites: {}
  }

  type TradingRulesGetPayload<S extends boolean | null | undefined | TradingRulesDefaultArgs> = $Result.GetResult<Prisma.$TradingRulesPayload, S>

  type TradingRulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradingRulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradingRulesCountAggregateInputType | true
    }

  export interface TradingRulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TradingRules'], meta: { name: 'TradingRules' } }
    /**
     * Find zero or one TradingRules that matches the filter.
     * @param {TradingRulesFindUniqueArgs} args - Arguments to find a TradingRules
     * @example
     * // Get one TradingRules
     * const tradingRules = await prisma.tradingRules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradingRulesFindUniqueArgs>(args: SelectSubset<T, TradingRulesFindUniqueArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradingRules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradingRulesFindUniqueOrThrowArgs} args - Arguments to find a TradingRules
     * @example
     * // Get one TradingRules
     * const tradingRules = await prisma.tradingRules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradingRulesFindUniqueOrThrowArgs>(args: SelectSubset<T, TradingRulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradingRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingRulesFindFirstArgs} args - Arguments to find a TradingRules
     * @example
     * // Get one TradingRules
     * const tradingRules = await prisma.tradingRules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradingRulesFindFirstArgs>(args?: SelectSubset<T, TradingRulesFindFirstArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradingRules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingRulesFindFirstOrThrowArgs} args - Arguments to find a TradingRules
     * @example
     * // Get one TradingRules
     * const tradingRules = await prisma.tradingRules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradingRulesFindFirstOrThrowArgs>(args?: SelectSubset<T, TradingRulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradingRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingRulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradingRules
     * const tradingRules = await prisma.tradingRules.findMany()
     * 
     * // Get first 10 TradingRules
     * const tradingRules = await prisma.tradingRules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradingRulesWithIdOnly = await prisma.tradingRules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradingRulesFindManyArgs>(args?: SelectSubset<T, TradingRulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TradingRules.
     * @param {TradingRulesCreateArgs} args - Arguments to create a TradingRules.
     * @example
     * // Create one TradingRules
     * const TradingRules = await prisma.tradingRules.create({
     *   data: {
     *     // ... data to create a TradingRules
     *   }
     * })
     * 
     */
    create<T extends TradingRulesCreateArgs>(args: SelectSubset<T, TradingRulesCreateArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradingRules.
     * @param {TradingRulesCreateManyArgs} args - Arguments to create many TradingRules.
     * @example
     * // Create many TradingRules
     * const tradingRules = await prisma.tradingRules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradingRulesCreateManyArgs>(args?: SelectSubset<T, TradingRulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradingRules and returns the data saved in the database.
     * @param {TradingRulesCreateManyAndReturnArgs} args - Arguments to create many TradingRules.
     * @example
     * // Create many TradingRules
     * const tradingRules = await prisma.tradingRules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TradingRules and only return the `id`
     * const tradingRulesWithIdOnly = await prisma.tradingRules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradingRulesCreateManyAndReturnArgs>(args?: SelectSubset<T, TradingRulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TradingRules.
     * @param {TradingRulesDeleteArgs} args - Arguments to delete one TradingRules.
     * @example
     * // Delete one TradingRules
     * const TradingRules = await prisma.tradingRules.delete({
     *   where: {
     *     // ... filter to delete one TradingRules
     *   }
     * })
     * 
     */
    delete<T extends TradingRulesDeleteArgs>(args: SelectSubset<T, TradingRulesDeleteArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradingRules.
     * @param {TradingRulesUpdateArgs} args - Arguments to update one TradingRules.
     * @example
     * // Update one TradingRules
     * const tradingRules = await prisma.tradingRules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradingRulesUpdateArgs>(args: SelectSubset<T, TradingRulesUpdateArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradingRules.
     * @param {TradingRulesDeleteManyArgs} args - Arguments to filter TradingRules to delete.
     * @example
     * // Delete a few TradingRules
     * const { count } = await prisma.tradingRules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradingRulesDeleteManyArgs>(args?: SelectSubset<T, TradingRulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingRulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradingRules
     * const tradingRules = await prisma.tradingRules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradingRulesUpdateManyArgs>(args: SelectSubset<T, TradingRulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradingRules and returns the data updated in the database.
     * @param {TradingRulesUpdateManyAndReturnArgs} args - Arguments to update many TradingRules.
     * @example
     * // Update many TradingRules
     * const tradingRules = await prisma.tradingRules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TradingRules and only return the `id`
     * const tradingRulesWithIdOnly = await prisma.tradingRules.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradingRulesUpdateManyAndReturnArgs>(args: SelectSubset<T, TradingRulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TradingRules.
     * @param {TradingRulesUpsertArgs} args - Arguments to update or create a TradingRules.
     * @example
     * // Update or create a TradingRules
     * const tradingRules = await prisma.tradingRules.upsert({
     *   create: {
     *     // ... data to create a TradingRules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradingRules we want to update
     *   }
     * })
     */
    upsert<T extends TradingRulesUpsertArgs>(args: SelectSubset<T, TradingRulesUpsertArgs<ExtArgs>>): Prisma__TradingRulesClient<$Result.GetResult<Prisma.$TradingRulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TradingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingRulesCountArgs} args - Arguments to filter TradingRules to count.
     * @example
     * // Count the number of TradingRules
     * const count = await prisma.tradingRules.count({
     *   where: {
     *     // ... the filter for the TradingRules we want to count
     *   }
     * })
    **/
    count<T extends TradingRulesCountArgs>(
      args?: Subset<T, TradingRulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradingRulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingRulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradingRulesAggregateArgs>(args: Subset<T, TradingRulesAggregateArgs>): Prisma.PrismaPromise<GetTradingRulesAggregateType<T>>

    /**
     * Group by TradingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradingRulesGroupByArgs} args - Group by arguments.
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
      T extends TradingRulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradingRulesGroupByArgs['orderBy'] }
        : { orderBy?: TradingRulesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradingRulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradingRulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TradingRules model
   */
  readonly fields: TradingRulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TradingRules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradingRulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TradingRules model
   */
  interface TradingRulesFieldRefs {
    readonly id: FieldRef<"TradingRules", 'String'>
    readonly userId: FieldRef<"TradingRules", 'String'>
    readonly allowedSetups: FieldRef<"TradingRules", 'String'>
    readonly forbiddenConditions: FieldRef<"TradingRules", 'String'>
    readonly requiredBeforeEntry: FieldRef<"TradingRules", 'String'>
    readonly invalidationRules: FieldRef<"TradingRules", 'String'>
    readonly allowedHours: FieldRef<"TradingRules", 'String'>
    readonly forbiddenHours: FieldRef<"TradingRules", 'String'>
    readonly createdAt: FieldRef<"TradingRules", 'DateTime'>
    readonly updatedAt: FieldRef<"TradingRules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TradingRules findUnique
   */
  export type TradingRulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * Filter, which TradingRules to fetch.
     */
    where: TradingRulesWhereUniqueInput
  }

  /**
   * TradingRules findUniqueOrThrow
   */
  export type TradingRulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * Filter, which TradingRules to fetch.
     */
    where: TradingRulesWhereUniqueInput
  }

  /**
   * TradingRules findFirst
   */
  export type TradingRulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * Filter, which TradingRules to fetch.
     */
    where?: TradingRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingRules to fetch.
     */
    orderBy?: TradingRulesOrderByWithRelationInput | TradingRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradingRules.
     */
    cursor?: TradingRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingRules.
     */
    distinct?: TradingRulesScalarFieldEnum | TradingRulesScalarFieldEnum[]
  }

  /**
   * TradingRules findFirstOrThrow
   */
  export type TradingRulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * Filter, which TradingRules to fetch.
     */
    where?: TradingRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingRules to fetch.
     */
    orderBy?: TradingRulesOrderByWithRelationInput | TradingRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TradingRules.
     */
    cursor?: TradingRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingRules.
     */
    distinct?: TradingRulesScalarFieldEnum | TradingRulesScalarFieldEnum[]
  }

  /**
   * TradingRules findMany
   */
  export type TradingRulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * Filter, which TradingRules to fetch.
     */
    where?: TradingRulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TradingRules to fetch.
     */
    orderBy?: TradingRulesOrderByWithRelationInput | TradingRulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TradingRules.
     */
    cursor?: TradingRulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TradingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TradingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TradingRules.
     */
    distinct?: TradingRulesScalarFieldEnum | TradingRulesScalarFieldEnum[]
  }

  /**
   * TradingRules create
   */
  export type TradingRulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * The data needed to create a TradingRules.
     */
    data: XOR<TradingRulesCreateInput, TradingRulesUncheckedCreateInput>
  }

  /**
   * TradingRules createMany
   */
  export type TradingRulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TradingRules.
     */
    data: TradingRulesCreateManyInput | TradingRulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TradingRules createManyAndReturn
   */
  export type TradingRulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * The data used to create many TradingRules.
     */
    data: TradingRulesCreateManyInput | TradingRulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradingRules update
   */
  export type TradingRulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * The data needed to update a TradingRules.
     */
    data: XOR<TradingRulesUpdateInput, TradingRulesUncheckedUpdateInput>
    /**
     * Choose, which TradingRules to update.
     */
    where: TradingRulesWhereUniqueInput
  }

  /**
   * TradingRules updateMany
   */
  export type TradingRulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TradingRules.
     */
    data: XOR<TradingRulesUpdateManyMutationInput, TradingRulesUncheckedUpdateManyInput>
    /**
     * Filter which TradingRules to update
     */
    where?: TradingRulesWhereInput
    /**
     * Limit how many TradingRules to update.
     */
    limit?: number
  }

  /**
   * TradingRules updateManyAndReturn
   */
  export type TradingRulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * The data used to update TradingRules.
     */
    data: XOR<TradingRulesUpdateManyMutationInput, TradingRulesUncheckedUpdateManyInput>
    /**
     * Filter which TradingRules to update
     */
    where?: TradingRulesWhereInput
    /**
     * Limit how many TradingRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TradingRules upsert
   */
  export type TradingRulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * The filter to search for the TradingRules to update in case it exists.
     */
    where: TradingRulesWhereUniqueInput
    /**
     * In case the TradingRules found by the `where` argument doesn't exist, create a new TradingRules with this data.
     */
    create: XOR<TradingRulesCreateInput, TradingRulesUncheckedCreateInput>
    /**
     * In case the TradingRules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradingRulesUpdateInput, TradingRulesUncheckedUpdateInput>
  }

  /**
   * TradingRules delete
   */
  export type TradingRulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
    /**
     * Filter which TradingRules to delete.
     */
    where: TradingRulesWhereUniqueInput
  }

  /**
   * TradingRules deleteMany
   */
  export type TradingRulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TradingRules to delete
     */
    where?: TradingRulesWhereInput
    /**
     * Limit how many TradingRules to delete.
     */
    limit?: number
  }

  /**
   * TradingRules without action
   */
  export type TradingRulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradingRules
     */
    select?: TradingRulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TradingRules
     */
    omit?: TradingRulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradingRulesInclude<ExtArgs> | null
  }


  /**
   * Model MentalProfile
   */

  export type AggregateMentalProfile = {
    _count: MentalProfileCountAggregateOutputType | null
    _min: MentalProfileMinAggregateOutputType | null
    _max: MentalProfileMaxAggregateOutputType | null
  }

  export type MentalProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mainWeaknesses: string | null
    tiltTrigger: string | null
    tiltThoughts: string | null
    coachingTone: $Enums.CoachingTone | null
    interruptionStyle: string | null
    responseStyle: $Enums.ResponseStyle | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MentalProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mainWeaknesses: string | null
    tiltTrigger: string | null
    tiltThoughts: string | null
    coachingTone: $Enums.CoachingTone | null
    interruptionStyle: string | null
    responseStyle: $Enums.ResponseStyle | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MentalProfileCountAggregateOutputType = {
    id: number
    userId: number
    mainWeaknesses: number
    tiltTrigger: number
    tiltThoughts: number
    coachingTone: number
    interruptionStyle: number
    responseStyle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MentalProfileMinAggregateInputType = {
    id?: true
    userId?: true
    mainWeaknesses?: true
    tiltTrigger?: true
    tiltThoughts?: true
    coachingTone?: true
    interruptionStyle?: true
    responseStyle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MentalProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    mainWeaknesses?: true
    tiltTrigger?: true
    tiltThoughts?: true
    coachingTone?: true
    interruptionStyle?: true
    responseStyle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MentalProfileCountAggregateInputType = {
    id?: true
    userId?: true
    mainWeaknesses?: true
    tiltTrigger?: true
    tiltThoughts?: true
    coachingTone?: true
    interruptionStyle?: true
    responseStyle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MentalProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentalProfile to aggregate.
     */
    where?: MentalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalProfiles to fetch.
     */
    orderBy?: MentalProfileOrderByWithRelationInput | MentalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MentalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MentalProfiles
    **/
    _count?: true | MentalProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentalProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentalProfileMaxAggregateInputType
  }

  export type GetMentalProfileAggregateType<T extends MentalProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateMentalProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentalProfile[P]>
      : GetScalarType<T[P], AggregateMentalProfile[P]>
  }




  export type MentalProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MentalProfileWhereInput
    orderBy?: MentalProfileOrderByWithAggregationInput | MentalProfileOrderByWithAggregationInput[]
    by: MentalProfileScalarFieldEnum[] | MentalProfileScalarFieldEnum
    having?: MentalProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentalProfileCountAggregateInputType | true
    _min?: MentalProfileMinAggregateInputType
    _max?: MentalProfileMaxAggregateInputType
  }

  export type MentalProfileGroupByOutputType = {
    id: string
    userId: string
    mainWeaknesses: string
    tiltTrigger: string
    tiltThoughts: string
    coachingTone: $Enums.CoachingTone
    interruptionStyle: string
    responseStyle: $Enums.ResponseStyle
    createdAt: Date
    updatedAt: Date
    _count: MentalProfileCountAggregateOutputType | null
    _min: MentalProfileMinAggregateOutputType | null
    _max: MentalProfileMaxAggregateOutputType | null
  }

  type GetMentalProfileGroupByPayload<T extends MentalProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MentalProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MentalProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MentalProfileGroupByOutputType[P]>
            : GetScalarType<T[P], MentalProfileGroupByOutputType[P]>
        }
      >
    >


  export type MentalProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mainWeaknesses?: boolean
    tiltTrigger?: boolean
    tiltThoughts?: boolean
    coachingTone?: boolean
    interruptionStyle?: boolean
    responseStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentalProfile"]>

  export type MentalProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mainWeaknesses?: boolean
    tiltTrigger?: boolean
    tiltThoughts?: boolean
    coachingTone?: boolean
    interruptionStyle?: boolean
    responseStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentalProfile"]>

  export type MentalProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mainWeaknesses?: boolean
    tiltTrigger?: boolean
    tiltThoughts?: boolean
    coachingTone?: boolean
    interruptionStyle?: boolean
    responseStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mentalProfile"]>

  export type MentalProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    mainWeaknesses?: boolean
    tiltTrigger?: boolean
    tiltThoughts?: boolean
    coachingTone?: boolean
    interruptionStyle?: boolean
    responseStyle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MentalProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mainWeaknesses" | "tiltTrigger" | "tiltThoughts" | "coachingTone" | "interruptionStyle" | "responseStyle" | "createdAt" | "updatedAt", ExtArgs["result"]["mentalProfile"]>
  export type MentalProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentalProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MentalProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MentalProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MentalProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mainWeaknesses: string
      tiltTrigger: string
      tiltThoughts: string
      coachingTone: $Enums.CoachingTone
      interruptionStyle: string
      responseStyle: $Enums.ResponseStyle
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mentalProfile"]>
    composites: {}
  }

  type MentalProfileGetPayload<S extends boolean | null | undefined | MentalProfileDefaultArgs> = $Result.GetResult<Prisma.$MentalProfilePayload, S>

  type MentalProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MentalProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MentalProfileCountAggregateInputType | true
    }

  export interface MentalProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MentalProfile'], meta: { name: 'MentalProfile' } }
    /**
     * Find zero or one MentalProfile that matches the filter.
     * @param {MentalProfileFindUniqueArgs} args - Arguments to find a MentalProfile
     * @example
     * // Get one MentalProfile
     * const mentalProfile = await prisma.mentalProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MentalProfileFindUniqueArgs>(args: SelectSubset<T, MentalProfileFindUniqueArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MentalProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MentalProfileFindUniqueOrThrowArgs} args - Arguments to find a MentalProfile
     * @example
     * // Get one MentalProfile
     * const mentalProfile = await prisma.mentalProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MentalProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, MentalProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentalProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalProfileFindFirstArgs} args - Arguments to find a MentalProfile
     * @example
     * // Get one MentalProfile
     * const mentalProfile = await prisma.mentalProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MentalProfileFindFirstArgs>(args?: SelectSubset<T, MentalProfileFindFirstArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MentalProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalProfileFindFirstOrThrowArgs} args - Arguments to find a MentalProfile
     * @example
     * // Get one MentalProfile
     * const mentalProfile = await prisma.mentalProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MentalProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, MentalProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MentalProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MentalProfiles
     * const mentalProfiles = await prisma.mentalProfile.findMany()
     * 
     * // Get first 10 MentalProfiles
     * const mentalProfiles = await prisma.mentalProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentalProfileWithIdOnly = await prisma.mentalProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MentalProfileFindManyArgs>(args?: SelectSubset<T, MentalProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MentalProfile.
     * @param {MentalProfileCreateArgs} args - Arguments to create a MentalProfile.
     * @example
     * // Create one MentalProfile
     * const MentalProfile = await prisma.mentalProfile.create({
     *   data: {
     *     // ... data to create a MentalProfile
     *   }
     * })
     * 
     */
    create<T extends MentalProfileCreateArgs>(args: SelectSubset<T, MentalProfileCreateArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MentalProfiles.
     * @param {MentalProfileCreateManyArgs} args - Arguments to create many MentalProfiles.
     * @example
     * // Create many MentalProfiles
     * const mentalProfile = await prisma.mentalProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MentalProfileCreateManyArgs>(args?: SelectSubset<T, MentalProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MentalProfiles and returns the data saved in the database.
     * @param {MentalProfileCreateManyAndReturnArgs} args - Arguments to create many MentalProfiles.
     * @example
     * // Create many MentalProfiles
     * const mentalProfile = await prisma.mentalProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MentalProfiles and only return the `id`
     * const mentalProfileWithIdOnly = await prisma.mentalProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MentalProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, MentalProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MentalProfile.
     * @param {MentalProfileDeleteArgs} args - Arguments to delete one MentalProfile.
     * @example
     * // Delete one MentalProfile
     * const MentalProfile = await prisma.mentalProfile.delete({
     *   where: {
     *     // ... filter to delete one MentalProfile
     *   }
     * })
     * 
     */
    delete<T extends MentalProfileDeleteArgs>(args: SelectSubset<T, MentalProfileDeleteArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MentalProfile.
     * @param {MentalProfileUpdateArgs} args - Arguments to update one MentalProfile.
     * @example
     * // Update one MentalProfile
     * const mentalProfile = await prisma.mentalProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MentalProfileUpdateArgs>(args: SelectSubset<T, MentalProfileUpdateArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MentalProfiles.
     * @param {MentalProfileDeleteManyArgs} args - Arguments to filter MentalProfiles to delete.
     * @example
     * // Delete a few MentalProfiles
     * const { count } = await prisma.mentalProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MentalProfileDeleteManyArgs>(args?: SelectSubset<T, MentalProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MentalProfiles
     * const mentalProfile = await prisma.mentalProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MentalProfileUpdateManyArgs>(args: SelectSubset<T, MentalProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MentalProfiles and returns the data updated in the database.
     * @param {MentalProfileUpdateManyAndReturnArgs} args - Arguments to update many MentalProfiles.
     * @example
     * // Update many MentalProfiles
     * const mentalProfile = await prisma.mentalProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MentalProfiles and only return the `id`
     * const mentalProfileWithIdOnly = await prisma.mentalProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MentalProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, MentalProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MentalProfile.
     * @param {MentalProfileUpsertArgs} args - Arguments to update or create a MentalProfile.
     * @example
     * // Update or create a MentalProfile
     * const mentalProfile = await prisma.mentalProfile.upsert({
     *   create: {
     *     // ... data to create a MentalProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MentalProfile we want to update
     *   }
     * })
     */
    upsert<T extends MentalProfileUpsertArgs>(args: SelectSubset<T, MentalProfileUpsertArgs<ExtArgs>>): Prisma__MentalProfileClient<$Result.GetResult<Prisma.$MentalProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MentalProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalProfileCountArgs} args - Arguments to filter MentalProfiles to count.
     * @example
     * // Count the number of MentalProfiles
     * const count = await prisma.mentalProfile.count({
     *   where: {
     *     // ... the filter for the MentalProfiles we want to count
     *   }
     * })
    **/
    count<T extends MentalProfileCountArgs>(
      args?: Subset<T, MentalProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentalProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MentalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MentalProfileAggregateArgs>(args: Subset<T, MentalProfileAggregateArgs>): Prisma.PrismaPromise<GetMentalProfileAggregateType<T>>

    /**
     * Group by MentalProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentalProfileGroupByArgs} args - Group by arguments.
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
      T extends MentalProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentalProfileGroupByArgs['orderBy'] }
        : { orderBy?: MentalProfileGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MentalProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentalProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MentalProfile model
   */
  readonly fields: MentalProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MentalProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MentalProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MentalProfile model
   */
  interface MentalProfileFieldRefs {
    readonly id: FieldRef<"MentalProfile", 'String'>
    readonly userId: FieldRef<"MentalProfile", 'String'>
    readonly mainWeaknesses: FieldRef<"MentalProfile", 'String'>
    readonly tiltTrigger: FieldRef<"MentalProfile", 'String'>
    readonly tiltThoughts: FieldRef<"MentalProfile", 'String'>
    readonly coachingTone: FieldRef<"MentalProfile", 'CoachingTone'>
    readonly interruptionStyle: FieldRef<"MentalProfile", 'String'>
    readonly responseStyle: FieldRef<"MentalProfile", 'ResponseStyle'>
    readonly createdAt: FieldRef<"MentalProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"MentalProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MentalProfile findUnique
   */
  export type MentalProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentalProfile to fetch.
     */
    where: MentalProfileWhereUniqueInput
  }

  /**
   * MentalProfile findUniqueOrThrow
   */
  export type MentalProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentalProfile to fetch.
     */
    where: MentalProfileWhereUniqueInput
  }

  /**
   * MentalProfile findFirst
   */
  export type MentalProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentalProfile to fetch.
     */
    where?: MentalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalProfiles to fetch.
     */
    orderBy?: MentalProfileOrderByWithRelationInput | MentalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentalProfiles.
     */
    cursor?: MentalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentalProfiles.
     */
    distinct?: MentalProfileScalarFieldEnum | MentalProfileScalarFieldEnum[]
  }

  /**
   * MentalProfile findFirstOrThrow
   */
  export type MentalProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentalProfile to fetch.
     */
    where?: MentalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalProfiles to fetch.
     */
    orderBy?: MentalProfileOrderByWithRelationInput | MentalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MentalProfiles.
     */
    cursor?: MentalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentalProfiles.
     */
    distinct?: MentalProfileScalarFieldEnum | MentalProfileScalarFieldEnum[]
  }

  /**
   * MentalProfile findMany
   */
  export type MentalProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * Filter, which MentalProfiles to fetch.
     */
    where?: MentalProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MentalProfiles to fetch.
     */
    orderBy?: MentalProfileOrderByWithRelationInput | MentalProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MentalProfiles.
     */
    cursor?: MentalProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MentalProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MentalProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MentalProfiles.
     */
    distinct?: MentalProfileScalarFieldEnum | MentalProfileScalarFieldEnum[]
  }

  /**
   * MentalProfile create
   */
  export type MentalProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a MentalProfile.
     */
    data: XOR<MentalProfileCreateInput, MentalProfileUncheckedCreateInput>
  }

  /**
   * MentalProfile createMany
   */
  export type MentalProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MentalProfiles.
     */
    data: MentalProfileCreateManyInput | MentalProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MentalProfile createManyAndReturn
   */
  export type MentalProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * The data used to create many MentalProfiles.
     */
    data: MentalProfileCreateManyInput | MentalProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentalProfile update
   */
  export type MentalProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a MentalProfile.
     */
    data: XOR<MentalProfileUpdateInput, MentalProfileUncheckedUpdateInput>
    /**
     * Choose, which MentalProfile to update.
     */
    where: MentalProfileWhereUniqueInput
  }

  /**
   * MentalProfile updateMany
   */
  export type MentalProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MentalProfiles.
     */
    data: XOR<MentalProfileUpdateManyMutationInput, MentalProfileUncheckedUpdateManyInput>
    /**
     * Filter which MentalProfiles to update
     */
    where?: MentalProfileWhereInput
    /**
     * Limit how many MentalProfiles to update.
     */
    limit?: number
  }

  /**
   * MentalProfile updateManyAndReturn
   */
  export type MentalProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * The data used to update MentalProfiles.
     */
    data: XOR<MentalProfileUpdateManyMutationInput, MentalProfileUncheckedUpdateManyInput>
    /**
     * Filter which MentalProfiles to update
     */
    where?: MentalProfileWhereInput
    /**
     * Limit how many MentalProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MentalProfile upsert
   */
  export type MentalProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the MentalProfile to update in case it exists.
     */
    where: MentalProfileWhereUniqueInput
    /**
     * In case the MentalProfile found by the `where` argument doesn't exist, create a new MentalProfile with this data.
     */
    create: XOR<MentalProfileCreateInput, MentalProfileUncheckedCreateInput>
    /**
     * In case the MentalProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MentalProfileUpdateInput, MentalProfileUncheckedUpdateInput>
  }

  /**
   * MentalProfile delete
   */
  export type MentalProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
    /**
     * Filter which MentalProfile to delete.
     */
    where: MentalProfileWhereUniqueInput
  }

  /**
   * MentalProfile deleteMany
   */
  export type MentalProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MentalProfiles to delete
     */
    where?: MentalProfileWhereInput
    /**
     * Limit how many MentalProfiles to delete.
     */
    limit?: number
  }

  /**
   * MentalProfile without action
   */
  export type MentalProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MentalProfile
     */
    select?: MentalProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MentalProfile
     */
    omit?: MentalProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MentalProfileInclude<ExtArgs> | null
  }


  /**
   * Model CoachingPreferences
   */

  export type AggregateCoachingPreferences = {
    _count: CoachingPreferencesCountAggregateOutputType | null
    _avg: CoachingPreferencesAvgAggregateOutputType | null
    _sum: CoachingPreferencesSumAggregateOutputType | null
    _min: CoachingPreferencesMinAggregateOutputType | null
    _max: CoachingPreferencesMaxAggregateOutputType | null
  }

  export type CoachingPreferencesAvgAggregateOutputType = {
    preNewsMinutes: number | null
  }

  export type CoachingPreferencesSumAggregateOutputType = {
    preNewsMinutes: number | null
  }

  export type CoachingPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    premarketCheckinEnabled: boolean | null
    postmarketReviewEnabled: boolean | null
    checkinFormat: string | null
    reviewFocus: string | null
    newsAlertsEnabled: boolean | null
    preNewsMinutes: number | null
    highImpactOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachingPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    premarketCheckinEnabled: boolean | null
    postmarketReviewEnabled: boolean | null
    checkinFormat: string | null
    reviewFocus: string | null
    newsAlertsEnabled: boolean | null
    preNewsMinutes: number | null
    highImpactOnly: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachingPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    premarketCheckinEnabled: number
    postmarketReviewEnabled: number
    checkinFormat: number
    reviewFocus: number
    newsAlertsEnabled: number
    preNewsMinutes: number
    highImpactOnly: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoachingPreferencesAvgAggregateInputType = {
    preNewsMinutes?: true
  }

  export type CoachingPreferencesSumAggregateInputType = {
    preNewsMinutes?: true
  }

  export type CoachingPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    premarketCheckinEnabled?: true
    postmarketReviewEnabled?: true
    checkinFormat?: true
    reviewFocus?: true
    newsAlertsEnabled?: true
    preNewsMinutes?: true
    highImpactOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachingPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    premarketCheckinEnabled?: true
    postmarketReviewEnabled?: true
    checkinFormat?: true
    reviewFocus?: true
    newsAlertsEnabled?: true
    preNewsMinutes?: true
    highImpactOnly?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachingPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    premarketCheckinEnabled?: true
    postmarketReviewEnabled?: true
    checkinFormat?: true
    reviewFocus?: true
    newsAlertsEnabled?: true
    preNewsMinutes?: true
    highImpactOnly?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoachingPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingPreferences to aggregate.
     */
    where?: CoachingPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingPreferences to fetch.
     */
    orderBy?: CoachingPreferencesOrderByWithRelationInput | CoachingPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachingPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachingPreferences
    **/
    _count?: true | CoachingPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachingPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachingPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachingPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachingPreferencesMaxAggregateInputType
  }

  export type GetCoachingPreferencesAggregateType<T extends CoachingPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachingPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachingPreferences[P]>
      : GetScalarType<T[P], AggregateCoachingPreferences[P]>
  }




  export type CoachingPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingPreferencesWhereInput
    orderBy?: CoachingPreferencesOrderByWithAggregationInput | CoachingPreferencesOrderByWithAggregationInput[]
    by: CoachingPreferencesScalarFieldEnum[] | CoachingPreferencesScalarFieldEnum
    having?: CoachingPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachingPreferencesCountAggregateInputType | true
    _avg?: CoachingPreferencesAvgAggregateInputType
    _sum?: CoachingPreferencesSumAggregateInputType
    _min?: CoachingPreferencesMinAggregateInputType
    _max?: CoachingPreferencesMaxAggregateInputType
  }

  export type CoachingPreferencesGroupByOutputType = {
    id: string
    userId: string
    premarketCheckinEnabled: boolean
    postmarketReviewEnabled: boolean
    checkinFormat: string
    reviewFocus: string
    newsAlertsEnabled: boolean
    preNewsMinutes: number
    highImpactOnly: boolean
    createdAt: Date
    updatedAt: Date
    _count: CoachingPreferencesCountAggregateOutputType | null
    _avg: CoachingPreferencesAvgAggregateOutputType | null
    _sum: CoachingPreferencesSumAggregateOutputType | null
    _min: CoachingPreferencesMinAggregateOutputType | null
    _max: CoachingPreferencesMaxAggregateOutputType | null
  }

  type GetCoachingPreferencesGroupByPayload<T extends CoachingPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachingPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachingPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachingPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], CoachingPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type CoachingPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat?: boolean
    reviewFocus?: boolean
    newsAlertsEnabled?: boolean
    preNewsMinutes?: boolean
    highImpactOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingPreferences"]>

  export type CoachingPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat?: boolean
    reviewFocus?: boolean
    newsAlertsEnabled?: boolean
    preNewsMinutes?: boolean
    highImpactOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingPreferences"]>

  export type CoachingPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat?: boolean
    reviewFocus?: boolean
    newsAlertsEnabled?: boolean
    preNewsMinutes?: boolean
    highImpactOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingPreferences"]>

  export type CoachingPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat?: boolean
    reviewFocus?: boolean
    newsAlertsEnabled?: boolean
    preNewsMinutes?: boolean
    highImpactOnly?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoachingPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "premarketCheckinEnabled" | "postmarketReviewEnabled" | "checkinFormat" | "reviewFocus" | "newsAlertsEnabled" | "preNewsMinutes" | "highImpactOnly" | "createdAt" | "updatedAt", ExtArgs["result"]["coachingPreferences"]>
  export type CoachingPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachingPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachingPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoachingPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachingPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      premarketCheckinEnabled: boolean
      postmarketReviewEnabled: boolean
      checkinFormat: string
      reviewFocus: string
      newsAlertsEnabled: boolean
      preNewsMinutes: number
      highImpactOnly: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coachingPreferences"]>
    composites: {}
  }

  type CoachingPreferencesGetPayload<S extends boolean | null | undefined | CoachingPreferencesDefaultArgs> = $Result.GetResult<Prisma.$CoachingPreferencesPayload, S>

  type CoachingPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachingPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachingPreferencesCountAggregateInputType | true
    }

  export interface CoachingPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachingPreferences'], meta: { name: 'CoachingPreferences' } }
    /**
     * Find zero or one CoachingPreferences that matches the filter.
     * @param {CoachingPreferencesFindUniqueArgs} args - Arguments to find a CoachingPreferences
     * @example
     * // Get one CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachingPreferencesFindUniqueArgs>(args: SelectSubset<T, CoachingPreferencesFindUniqueArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoachingPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachingPreferencesFindUniqueOrThrowArgs} args - Arguments to find a CoachingPreferences
     * @example
     * // Get one CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachingPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachingPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachingPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingPreferencesFindFirstArgs} args - Arguments to find a CoachingPreferences
     * @example
     * // Get one CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachingPreferencesFindFirstArgs>(args?: SelectSubset<T, CoachingPreferencesFindFirstArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachingPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingPreferencesFindFirstOrThrowArgs} args - Arguments to find a CoachingPreferences
     * @example
     * // Get one CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachingPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachingPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoachingPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.findMany()
     * 
     * // Get first 10 CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachingPreferencesWithIdOnly = await prisma.coachingPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachingPreferencesFindManyArgs>(args?: SelectSubset<T, CoachingPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoachingPreferences.
     * @param {CoachingPreferencesCreateArgs} args - Arguments to create a CoachingPreferences.
     * @example
     * // Create one CoachingPreferences
     * const CoachingPreferences = await prisma.coachingPreferences.create({
     *   data: {
     *     // ... data to create a CoachingPreferences
     *   }
     * })
     * 
     */
    create<T extends CoachingPreferencesCreateArgs>(args: SelectSubset<T, CoachingPreferencesCreateArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoachingPreferences.
     * @param {CoachingPreferencesCreateManyArgs} args - Arguments to create many CoachingPreferences.
     * @example
     * // Create many CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachingPreferencesCreateManyArgs>(args?: SelectSubset<T, CoachingPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachingPreferences and returns the data saved in the database.
     * @param {CoachingPreferencesCreateManyAndReturnArgs} args - Arguments to create many CoachingPreferences.
     * @example
     * // Create many CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachingPreferences and only return the `id`
     * const coachingPreferencesWithIdOnly = await prisma.coachingPreferences.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachingPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachingPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoachingPreferences.
     * @param {CoachingPreferencesDeleteArgs} args - Arguments to delete one CoachingPreferences.
     * @example
     * // Delete one CoachingPreferences
     * const CoachingPreferences = await prisma.coachingPreferences.delete({
     *   where: {
     *     // ... filter to delete one CoachingPreferences
     *   }
     * })
     * 
     */
    delete<T extends CoachingPreferencesDeleteArgs>(args: SelectSubset<T, CoachingPreferencesDeleteArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoachingPreferences.
     * @param {CoachingPreferencesUpdateArgs} args - Arguments to update one CoachingPreferences.
     * @example
     * // Update one CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachingPreferencesUpdateArgs>(args: SelectSubset<T, CoachingPreferencesUpdateArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoachingPreferences.
     * @param {CoachingPreferencesDeleteManyArgs} args - Arguments to filter CoachingPreferences to delete.
     * @example
     * // Delete a few CoachingPreferences
     * const { count } = await prisma.coachingPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachingPreferencesDeleteManyArgs>(args?: SelectSubset<T, CoachingPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachingPreferencesUpdateManyArgs>(args: SelectSubset<T, CoachingPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingPreferences and returns the data updated in the database.
     * @param {CoachingPreferencesUpdateManyAndReturnArgs} args - Arguments to update many CoachingPreferences.
     * @example
     * // Update many CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoachingPreferences and only return the `id`
     * const coachingPreferencesWithIdOnly = await prisma.coachingPreferences.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoachingPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachingPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoachingPreferences.
     * @param {CoachingPreferencesUpsertArgs} args - Arguments to update or create a CoachingPreferences.
     * @example
     * // Update or create a CoachingPreferences
     * const coachingPreferences = await prisma.coachingPreferences.upsert({
     *   create: {
     *     // ... data to create a CoachingPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachingPreferences we want to update
     *   }
     * })
     */
    upsert<T extends CoachingPreferencesUpsertArgs>(args: SelectSubset<T, CoachingPreferencesUpsertArgs<ExtArgs>>): Prisma__CoachingPreferencesClient<$Result.GetResult<Prisma.$CoachingPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoachingPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingPreferencesCountArgs} args - Arguments to filter CoachingPreferences to count.
     * @example
     * // Count the number of CoachingPreferences
     * const count = await prisma.coachingPreferences.count({
     *   where: {
     *     // ... the filter for the CoachingPreferences we want to count
     *   }
     * })
    **/
    count<T extends CoachingPreferencesCountArgs>(
      args?: Subset<T, CoachingPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachingPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachingPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachingPreferencesAggregateArgs>(args: Subset<T, CoachingPreferencesAggregateArgs>): Prisma.PrismaPromise<GetCoachingPreferencesAggregateType<T>>

    /**
     * Group by CoachingPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingPreferencesGroupByArgs} args - Group by arguments.
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
      T extends CoachingPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachingPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: CoachingPreferencesGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoachingPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachingPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachingPreferences model
   */
  readonly fields: CoachingPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachingPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachingPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoachingPreferences model
   */
  interface CoachingPreferencesFieldRefs {
    readonly id: FieldRef<"CoachingPreferences", 'String'>
    readonly userId: FieldRef<"CoachingPreferences", 'String'>
    readonly premarketCheckinEnabled: FieldRef<"CoachingPreferences", 'Boolean'>
    readonly postmarketReviewEnabled: FieldRef<"CoachingPreferences", 'Boolean'>
    readonly checkinFormat: FieldRef<"CoachingPreferences", 'String'>
    readonly reviewFocus: FieldRef<"CoachingPreferences", 'String'>
    readonly newsAlertsEnabled: FieldRef<"CoachingPreferences", 'Boolean'>
    readonly preNewsMinutes: FieldRef<"CoachingPreferences", 'Int'>
    readonly highImpactOnly: FieldRef<"CoachingPreferences", 'Boolean'>
    readonly createdAt: FieldRef<"CoachingPreferences", 'DateTime'>
    readonly updatedAt: FieldRef<"CoachingPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachingPreferences findUnique
   */
  export type CoachingPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which CoachingPreferences to fetch.
     */
    where: CoachingPreferencesWhereUniqueInput
  }

  /**
   * CoachingPreferences findUniqueOrThrow
   */
  export type CoachingPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which CoachingPreferences to fetch.
     */
    where: CoachingPreferencesWhereUniqueInput
  }

  /**
   * CoachingPreferences findFirst
   */
  export type CoachingPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which CoachingPreferences to fetch.
     */
    where?: CoachingPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingPreferences to fetch.
     */
    orderBy?: CoachingPreferencesOrderByWithRelationInput | CoachingPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingPreferences.
     */
    cursor?: CoachingPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingPreferences.
     */
    distinct?: CoachingPreferencesScalarFieldEnum | CoachingPreferencesScalarFieldEnum[]
  }

  /**
   * CoachingPreferences findFirstOrThrow
   */
  export type CoachingPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which CoachingPreferences to fetch.
     */
    where?: CoachingPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingPreferences to fetch.
     */
    orderBy?: CoachingPreferencesOrderByWithRelationInput | CoachingPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingPreferences.
     */
    cursor?: CoachingPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingPreferences.
     */
    distinct?: CoachingPreferencesScalarFieldEnum | CoachingPreferencesScalarFieldEnum[]
  }

  /**
   * CoachingPreferences findMany
   */
  export type CoachingPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which CoachingPreferences to fetch.
     */
    where?: CoachingPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingPreferences to fetch.
     */
    orderBy?: CoachingPreferencesOrderByWithRelationInput | CoachingPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachingPreferences.
     */
    cursor?: CoachingPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingPreferences.
     */
    distinct?: CoachingPreferencesScalarFieldEnum | CoachingPreferencesScalarFieldEnum[]
  }

  /**
   * CoachingPreferences create
   */
  export type CoachingPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachingPreferences.
     */
    data: XOR<CoachingPreferencesCreateInput, CoachingPreferencesUncheckedCreateInput>
  }

  /**
   * CoachingPreferences createMany
   */
  export type CoachingPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachingPreferences.
     */
    data: CoachingPreferencesCreateManyInput | CoachingPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachingPreferences createManyAndReturn
   */
  export type CoachingPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many CoachingPreferences.
     */
    data: CoachingPreferencesCreateManyInput | CoachingPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingPreferences update
   */
  export type CoachingPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachingPreferences.
     */
    data: XOR<CoachingPreferencesUpdateInput, CoachingPreferencesUncheckedUpdateInput>
    /**
     * Choose, which CoachingPreferences to update.
     */
    where: CoachingPreferencesWhereUniqueInput
  }

  /**
   * CoachingPreferences updateMany
   */
  export type CoachingPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachingPreferences.
     */
    data: XOR<CoachingPreferencesUpdateManyMutationInput, CoachingPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which CoachingPreferences to update
     */
    where?: CoachingPreferencesWhereInput
    /**
     * Limit how many CoachingPreferences to update.
     */
    limit?: number
  }

  /**
   * CoachingPreferences updateManyAndReturn
   */
  export type CoachingPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update CoachingPreferences.
     */
    data: XOR<CoachingPreferencesUpdateManyMutationInput, CoachingPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which CoachingPreferences to update
     */
    where?: CoachingPreferencesWhereInput
    /**
     * Limit how many CoachingPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingPreferences upsert
   */
  export type CoachingPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachingPreferences to update in case it exists.
     */
    where: CoachingPreferencesWhereUniqueInput
    /**
     * In case the CoachingPreferences found by the `where` argument doesn't exist, create a new CoachingPreferences with this data.
     */
    create: XOR<CoachingPreferencesCreateInput, CoachingPreferencesUncheckedCreateInput>
    /**
     * In case the CoachingPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachingPreferencesUpdateInput, CoachingPreferencesUncheckedUpdateInput>
  }

  /**
   * CoachingPreferences delete
   */
  export type CoachingPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
    /**
     * Filter which CoachingPreferences to delete.
     */
    where: CoachingPreferencesWhereUniqueInput
  }

  /**
   * CoachingPreferences deleteMany
   */
  export type CoachingPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingPreferences to delete
     */
    where?: CoachingPreferencesWhereInput
    /**
     * Limit how many CoachingPreferences to delete.
     */
    limit?: number
  }

  /**
   * CoachingPreferences without action
   */
  export type CoachingPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingPreferences
     */
    select?: CoachingPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingPreferences
     */
    omit?: CoachingPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model NewsEvent
   */

  export type AggregateNewsEvent = {
    _count: NewsEventCountAggregateOutputType | null
    _min: NewsEventMinAggregateOutputType | null
    _max: NewsEventMaxAggregateOutputType | null
  }

  export type NewsEventMinAggregateOutputType = {
    id: string | null
    providerEventId: string | null
    title: string | null
    startsAtUtc: Date | null
    country: string | null
    impactLevel: string | null
    category: string | null
    relevantMarkets: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsEventMaxAggregateOutputType = {
    id: string | null
    providerEventId: string | null
    title: string | null
    startsAtUtc: Date | null
    country: string | null
    impactLevel: string | null
    category: string | null
    relevantMarkets: string | null
    source: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsEventCountAggregateOutputType = {
    id: number
    providerEventId: number
    title: number
    startsAtUtc: number
    country: number
    impactLevel: number
    category: number
    relevantMarkets: number
    source: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsEventMinAggregateInputType = {
    id?: true
    providerEventId?: true
    title?: true
    startsAtUtc?: true
    country?: true
    impactLevel?: true
    category?: true
    relevantMarkets?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsEventMaxAggregateInputType = {
    id?: true
    providerEventId?: true
    title?: true
    startsAtUtc?: true
    country?: true
    impactLevel?: true
    category?: true
    relevantMarkets?: true
    source?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsEventCountAggregateInputType = {
    id?: true
    providerEventId?: true
    title?: true
    startsAtUtc?: true
    country?: true
    impactLevel?: true
    category?: true
    relevantMarkets?: true
    source?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsEvent to aggregate.
     */
    where?: NewsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsEvents to fetch.
     */
    orderBy?: NewsEventOrderByWithRelationInput | NewsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsEvents
    **/
    _count?: true | NewsEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsEventMaxAggregateInputType
  }

  export type GetNewsEventAggregateType<T extends NewsEventAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsEvent[P]>
      : GetScalarType<T[P], AggregateNewsEvent[P]>
  }




  export type NewsEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsEventWhereInput
    orderBy?: NewsEventOrderByWithAggregationInput | NewsEventOrderByWithAggregationInput[]
    by: NewsEventScalarFieldEnum[] | NewsEventScalarFieldEnum
    having?: NewsEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsEventCountAggregateInputType | true
    _min?: NewsEventMinAggregateInputType
    _max?: NewsEventMaxAggregateInputType
  }

  export type NewsEventGroupByOutputType = {
    id: string
    providerEventId: string | null
    title: string
    startsAtUtc: Date
    country: string | null
    impactLevel: string
    category: string | null
    relevantMarkets: string
    source: string
    createdAt: Date
    updatedAt: Date
    _count: NewsEventCountAggregateOutputType | null
    _min: NewsEventMinAggregateOutputType | null
    _max: NewsEventMaxAggregateOutputType | null
  }

  type GetNewsEventGroupByPayload<T extends NewsEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsEventGroupByOutputType[P]>
            : GetScalarType<T[P], NewsEventGroupByOutputType[P]>
        }
      >
    >


  export type NewsEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerEventId?: boolean
    title?: boolean
    startsAtUtc?: boolean
    country?: boolean
    impactLevel?: boolean
    category?: boolean
    relevantMarkets?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentAlerts?: boolean | NewsEvent$sentAlertsArgs<ExtArgs>
    _count?: boolean | NewsEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsEvent"]>

  export type NewsEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerEventId?: boolean
    title?: boolean
    startsAtUtc?: boolean
    country?: boolean
    impactLevel?: boolean
    category?: boolean
    relevantMarkets?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsEvent"]>

  export type NewsEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerEventId?: boolean
    title?: boolean
    startsAtUtc?: boolean
    country?: boolean
    impactLevel?: boolean
    category?: boolean
    relevantMarkets?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsEvent"]>

  export type NewsEventSelectScalar = {
    id?: boolean
    providerEventId?: boolean
    title?: boolean
    startsAtUtc?: boolean
    country?: boolean
    impactLevel?: boolean
    category?: boolean
    relevantMarkets?: boolean
    source?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerEventId" | "title" | "startsAtUtc" | "country" | "impactLevel" | "category" | "relevantMarkets" | "source" | "createdAt" | "updatedAt", ExtArgs["result"]["newsEvent"]>
  export type NewsEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentAlerts?: boolean | NewsEvent$sentAlertsArgs<ExtArgs>
    _count?: boolean | NewsEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsEvent"
    objects: {
      sentAlerts: Prisma.$SentNewsAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerEventId: string | null
      title: string
      startsAtUtc: Date
      country: string | null
      impactLevel: string
      category: string | null
      relevantMarkets: string
      source: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsEvent"]>
    composites: {}
  }

  type NewsEventGetPayload<S extends boolean | null | undefined | NewsEventDefaultArgs> = $Result.GetResult<Prisma.$NewsEventPayload, S>

  type NewsEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsEventCountAggregateInputType | true
    }

  export interface NewsEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsEvent'], meta: { name: 'NewsEvent' } }
    /**
     * Find zero or one NewsEvent that matches the filter.
     * @param {NewsEventFindUniqueArgs} args - Arguments to find a NewsEvent
     * @example
     * // Get one NewsEvent
     * const newsEvent = await prisma.newsEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsEventFindUniqueArgs>(args: SelectSubset<T, NewsEventFindUniqueArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsEventFindUniqueOrThrowArgs} args - Arguments to find a NewsEvent
     * @example
     * // Get one NewsEvent
     * const newsEvent = await prisma.newsEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsEventFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEventFindFirstArgs} args - Arguments to find a NewsEvent
     * @example
     * // Get one NewsEvent
     * const newsEvent = await prisma.newsEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsEventFindFirstArgs>(args?: SelectSubset<T, NewsEventFindFirstArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEventFindFirstOrThrowArgs} args - Arguments to find a NewsEvent
     * @example
     * // Get one NewsEvent
     * const newsEvent = await prisma.newsEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsEventFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsEvents
     * const newsEvents = await prisma.newsEvent.findMany()
     * 
     * // Get first 10 NewsEvents
     * const newsEvents = await prisma.newsEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsEventWithIdOnly = await prisma.newsEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsEventFindManyArgs>(args?: SelectSubset<T, NewsEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsEvent.
     * @param {NewsEventCreateArgs} args - Arguments to create a NewsEvent.
     * @example
     * // Create one NewsEvent
     * const NewsEvent = await prisma.newsEvent.create({
     *   data: {
     *     // ... data to create a NewsEvent
     *   }
     * })
     * 
     */
    create<T extends NewsEventCreateArgs>(args: SelectSubset<T, NewsEventCreateArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsEvents.
     * @param {NewsEventCreateManyArgs} args - Arguments to create many NewsEvents.
     * @example
     * // Create many NewsEvents
     * const newsEvent = await prisma.newsEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsEventCreateManyArgs>(args?: SelectSubset<T, NewsEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsEvents and returns the data saved in the database.
     * @param {NewsEventCreateManyAndReturnArgs} args - Arguments to create many NewsEvents.
     * @example
     * // Create many NewsEvents
     * const newsEvent = await prisma.newsEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsEvents and only return the `id`
     * const newsEventWithIdOnly = await prisma.newsEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsEventCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsEvent.
     * @param {NewsEventDeleteArgs} args - Arguments to delete one NewsEvent.
     * @example
     * // Delete one NewsEvent
     * const NewsEvent = await prisma.newsEvent.delete({
     *   where: {
     *     // ... filter to delete one NewsEvent
     *   }
     * })
     * 
     */
    delete<T extends NewsEventDeleteArgs>(args: SelectSubset<T, NewsEventDeleteArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsEvent.
     * @param {NewsEventUpdateArgs} args - Arguments to update one NewsEvent.
     * @example
     * // Update one NewsEvent
     * const newsEvent = await prisma.newsEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsEventUpdateArgs>(args: SelectSubset<T, NewsEventUpdateArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsEvents.
     * @param {NewsEventDeleteManyArgs} args - Arguments to filter NewsEvents to delete.
     * @example
     * // Delete a few NewsEvents
     * const { count } = await prisma.newsEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsEventDeleteManyArgs>(args?: SelectSubset<T, NewsEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsEvents
     * const newsEvent = await prisma.newsEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsEventUpdateManyArgs>(args: SelectSubset<T, NewsEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsEvents and returns the data updated in the database.
     * @param {NewsEventUpdateManyAndReturnArgs} args - Arguments to update many NewsEvents.
     * @example
     * // Update many NewsEvents
     * const newsEvent = await prisma.newsEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsEvents and only return the `id`
     * const newsEventWithIdOnly = await prisma.newsEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsEventUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsEvent.
     * @param {NewsEventUpsertArgs} args - Arguments to update or create a NewsEvent.
     * @example
     * // Update or create a NewsEvent
     * const newsEvent = await prisma.newsEvent.upsert({
     *   create: {
     *     // ... data to create a NewsEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsEvent we want to update
     *   }
     * })
     */
    upsert<T extends NewsEventUpsertArgs>(args: SelectSubset<T, NewsEventUpsertArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEventCountArgs} args - Arguments to filter NewsEvents to count.
     * @example
     * // Count the number of NewsEvents
     * const count = await prisma.newsEvent.count({
     *   where: {
     *     // ... the filter for the NewsEvents we want to count
     *   }
     * })
    **/
    count<T extends NewsEventCountArgs>(
      args?: Subset<T, NewsEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsEventAggregateArgs>(args: Subset<T, NewsEventAggregateArgs>): Prisma.PrismaPromise<GetNewsEventAggregateType<T>>

    /**
     * Group by NewsEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsEventGroupByArgs} args - Group by arguments.
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
      T extends NewsEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsEventGroupByArgs['orderBy'] }
        : { orderBy?: NewsEventGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsEvent model
   */
  readonly fields: NewsEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentAlerts<T extends NewsEvent$sentAlertsArgs<ExtArgs> = {}>(args?: Subset<T, NewsEvent$sentAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsEvent model
   */
  interface NewsEventFieldRefs {
    readonly id: FieldRef<"NewsEvent", 'String'>
    readonly providerEventId: FieldRef<"NewsEvent", 'String'>
    readonly title: FieldRef<"NewsEvent", 'String'>
    readonly startsAtUtc: FieldRef<"NewsEvent", 'DateTime'>
    readonly country: FieldRef<"NewsEvent", 'String'>
    readonly impactLevel: FieldRef<"NewsEvent", 'String'>
    readonly category: FieldRef<"NewsEvent", 'String'>
    readonly relevantMarkets: FieldRef<"NewsEvent", 'String'>
    readonly source: FieldRef<"NewsEvent", 'String'>
    readonly createdAt: FieldRef<"NewsEvent", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsEvent findUnique
   */
  export type NewsEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * Filter, which NewsEvent to fetch.
     */
    where: NewsEventWhereUniqueInput
  }

  /**
   * NewsEvent findUniqueOrThrow
   */
  export type NewsEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * Filter, which NewsEvent to fetch.
     */
    where: NewsEventWhereUniqueInput
  }

  /**
   * NewsEvent findFirst
   */
  export type NewsEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * Filter, which NewsEvent to fetch.
     */
    where?: NewsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsEvents to fetch.
     */
    orderBy?: NewsEventOrderByWithRelationInput | NewsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsEvents.
     */
    cursor?: NewsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsEvents.
     */
    distinct?: NewsEventScalarFieldEnum | NewsEventScalarFieldEnum[]
  }

  /**
   * NewsEvent findFirstOrThrow
   */
  export type NewsEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * Filter, which NewsEvent to fetch.
     */
    where?: NewsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsEvents to fetch.
     */
    orderBy?: NewsEventOrderByWithRelationInput | NewsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsEvents.
     */
    cursor?: NewsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsEvents.
     */
    distinct?: NewsEventScalarFieldEnum | NewsEventScalarFieldEnum[]
  }

  /**
   * NewsEvent findMany
   */
  export type NewsEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * Filter, which NewsEvents to fetch.
     */
    where?: NewsEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsEvents to fetch.
     */
    orderBy?: NewsEventOrderByWithRelationInput | NewsEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsEvents.
     */
    cursor?: NewsEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsEvents.
     */
    distinct?: NewsEventScalarFieldEnum | NewsEventScalarFieldEnum[]
  }

  /**
   * NewsEvent create
   */
  export type NewsEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsEvent.
     */
    data: XOR<NewsEventCreateInput, NewsEventUncheckedCreateInput>
  }

  /**
   * NewsEvent createMany
   */
  export type NewsEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsEvents.
     */
    data: NewsEventCreateManyInput | NewsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsEvent createManyAndReturn
   */
  export type NewsEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * The data used to create many NewsEvents.
     */
    data: NewsEventCreateManyInput | NewsEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsEvent update
   */
  export type NewsEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsEvent.
     */
    data: XOR<NewsEventUpdateInput, NewsEventUncheckedUpdateInput>
    /**
     * Choose, which NewsEvent to update.
     */
    where: NewsEventWhereUniqueInput
  }

  /**
   * NewsEvent updateMany
   */
  export type NewsEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsEvents.
     */
    data: XOR<NewsEventUpdateManyMutationInput, NewsEventUncheckedUpdateManyInput>
    /**
     * Filter which NewsEvents to update
     */
    where?: NewsEventWhereInput
    /**
     * Limit how many NewsEvents to update.
     */
    limit?: number
  }

  /**
   * NewsEvent updateManyAndReturn
   */
  export type NewsEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * The data used to update NewsEvents.
     */
    data: XOR<NewsEventUpdateManyMutationInput, NewsEventUncheckedUpdateManyInput>
    /**
     * Filter which NewsEvents to update
     */
    where?: NewsEventWhereInput
    /**
     * Limit how many NewsEvents to update.
     */
    limit?: number
  }

  /**
   * NewsEvent upsert
   */
  export type NewsEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsEvent to update in case it exists.
     */
    where: NewsEventWhereUniqueInput
    /**
     * In case the NewsEvent found by the `where` argument doesn't exist, create a new NewsEvent with this data.
     */
    create: XOR<NewsEventCreateInput, NewsEventUncheckedCreateInput>
    /**
     * In case the NewsEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsEventUpdateInput, NewsEventUncheckedUpdateInput>
  }

  /**
   * NewsEvent delete
   */
  export type NewsEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
    /**
     * Filter which NewsEvent to delete.
     */
    where: NewsEventWhereUniqueInput
  }

  /**
   * NewsEvent deleteMany
   */
  export type NewsEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsEvents to delete
     */
    where?: NewsEventWhereInput
    /**
     * Limit how many NewsEvents to delete.
     */
    limit?: number
  }

  /**
   * NewsEvent.sentAlerts
   */
  export type NewsEvent$sentAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    where?: SentNewsAlertWhereInput
    orderBy?: SentNewsAlertOrderByWithRelationInput | SentNewsAlertOrderByWithRelationInput[]
    cursor?: SentNewsAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SentNewsAlertScalarFieldEnum | SentNewsAlertScalarFieldEnum[]
  }

  /**
   * NewsEvent without action
   */
  export type NewsEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsEvent
     */
    select?: NewsEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsEvent
     */
    omit?: NewsEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsEventInclude<ExtArgs> | null
  }


  /**
   * Model SentNewsAlert
   */

  export type AggregateSentNewsAlert = {
    _count: SentNewsAlertCountAggregateOutputType | null
    _min: SentNewsAlertMinAggregateOutputType | null
    _max: SentNewsAlertMaxAggregateOutputType | null
  }

  export type SentNewsAlertMinAggregateOutputType = {
    id: string | null
    userId: string | null
    newsEventId: string | null
    alertType: $Enums.AlertType | null
    sentAt: Date | null
  }

  export type SentNewsAlertMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    newsEventId: string | null
    alertType: $Enums.AlertType | null
    sentAt: Date | null
  }

  export type SentNewsAlertCountAggregateOutputType = {
    id: number
    userId: number
    newsEventId: number
    alertType: number
    sentAt: number
    _all: number
  }


  export type SentNewsAlertMinAggregateInputType = {
    id?: true
    userId?: true
    newsEventId?: true
    alertType?: true
    sentAt?: true
  }

  export type SentNewsAlertMaxAggregateInputType = {
    id?: true
    userId?: true
    newsEventId?: true
    alertType?: true
    sentAt?: true
  }

  export type SentNewsAlertCountAggregateInputType = {
    id?: true
    userId?: true
    newsEventId?: true
    alertType?: true
    sentAt?: true
    _all?: true
  }

  export type SentNewsAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentNewsAlert to aggregate.
     */
    where?: SentNewsAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentNewsAlerts to fetch.
     */
    orderBy?: SentNewsAlertOrderByWithRelationInput | SentNewsAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentNewsAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentNewsAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentNewsAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SentNewsAlerts
    **/
    _count?: true | SentNewsAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentNewsAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentNewsAlertMaxAggregateInputType
  }

  export type GetSentNewsAlertAggregateType<T extends SentNewsAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateSentNewsAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentNewsAlert[P]>
      : GetScalarType<T[P], AggregateSentNewsAlert[P]>
  }




  export type SentNewsAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SentNewsAlertWhereInput
    orderBy?: SentNewsAlertOrderByWithAggregationInput | SentNewsAlertOrderByWithAggregationInput[]
    by: SentNewsAlertScalarFieldEnum[] | SentNewsAlertScalarFieldEnum
    having?: SentNewsAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentNewsAlertCountAggregateInputType | true
    _min?: SentNewsAlertMinAggregateInputType
    _max?: SentNewsAlertMaxAggregateInputType
  }

  export type SentNewsAlertGroupByOutputType = {
    id: string
    userId: string
    newsEventId: string
    alertType: $Enums.AlertType
    sentAt: Date
    _count: SentNewsAlertCountAggregateOutputType | null
    _min: SentNewsAlertMinAggregateOutputType | null
    _max: SentNewsAlertMaxAggregateOutputType | null
  }

  type GetSentNewsAlertGroupByPayload<T extends SentNewsAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SentNewsAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentNewsAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentNewsAlertGroupByOutputType[P]>
            : GetScalarType<T[P], SentNewsAlertGroupByOutputType[P]>
        }
      >
    >


  export type SentNewsAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    newsEventId?: boolean
    alertType?: boolean
    sentAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsEvent?: boolean | NewsEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentNewsAlert"]>

  export type SentNewsAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    newsEventId?: boolean
    alertType?: boolean
    sentAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsEvent?: boolean | NewsEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentNewsAlert"]>

  export type SentNewsAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    newsEventId?: boolean
    alertType?: boolean
    sentAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsEvent?: boolean | NewsEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sentNewsAlert"]>

  export type SentNewsAlertSelectScalar = {
    id?: boolean
    userId?: boolean
    newsEventId?: boolean
    alertType?: boolean
    sentAt?: boolean
  }

  export type SentNewsAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "newsEventId" | "alertType" | "sentAt", ExtArgs["result"]["sentNewsAlert"]>
  export type SentNewsAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsEvent?: boolean | NewsEventDefaultArgs<ExtArgs>
  }
  export type SentNewsAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsEvent?: boolean | NewsEventDefaultArgs<ExtArgs>
  }
  export type SentNewsAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    newsEvent?: boolean | NewsEventDefaultArgs<ExtArgs>
  }

  export type $SentNewsAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SentNewsAlert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      newsEvent: Prisma.$NewsEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      newsEventId: string
      alertType: $Enums.AlertType
      sentAt: Date
    }, ExtArgs["result"]["sentNewsAlert"]>
    composites: {}
  }

  type SentNewsAlertGetPayload<S extends boolean | null | undefined | SentNewsAlertDefaultArgs> = $Result.GetResult<Prisma.$SentNewsAlertPayload, S>

  type SentNewsAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SentNewsAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SentNewsAlertCountAggregateInputType | true
    }

  export interface SentNewsAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SentNewsAlert'], meta: { name: 'SentNewsAlert' } }
    /**
     * Find zero or one SentNewsAlert that matches the filter.
     * @param {SentNewsAlertFindUniqueArgs} args - Arguments to find a SentNewsAlert
     * @example
     * // Get one SentNewsAlert
     * const sentNewsAlert = await prisma.sentNewsAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SentNewsAlertFindUniqueArgs>(args: SelectSubset<T, SentNewsAlertFindUniqueArgs<ExtArgs>>): Prisma__SentNewsAlertClient<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SentNewsAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SentNewsAlertFindUniqueOrThrowArgs} args - Arguments to find a SentNewsAlert
     * @example
     * // Get one SentNewsAlert
     * const sentNewsAlert = await prisma.sentNewsAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SentNewsAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, SentNewsAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SentNewsAlertClient<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentNewsAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentNewsAlertFindFirstArgs} args - Arguments to find a SentNewsAlert
     * @example
     * // Get one SentNewsAlert
     * const sentNewsAlert = await prisma.sentNewsAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SentNewsAlertFindFirstArgs>(args?: SelectSubset<T, SentNewsAlertFindFirstArgs<ExtArgs>>): Prisma__SentNewsAlertClient<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SentNewsAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentNewsAlertFindFirstOrThrowArgs} args - Arguments to find a SentNewsAlert
     * @example
     * // Get one SentNewsAlert
     * const sentNewsAlert = await prisma.sentNewsAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SentNewsAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, SentNewsAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__SentNewsAlertClient<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SentNewsAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentNewsAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SentNewsAlerts
     * const sentNewsAlerts = await prisma.sentNewsAlert.findMany()
     * 
     * // Get first 10 SentNewsAlerts
     * const sentNewsAlerts = await prisma.sentNewsAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentNewsAlertWithIdOnly = await prisma.sentNewsAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SentNewsAlertFindManyArgs>(args?: SelectSubset<T, SentNewsAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SentNewsAlert.
     * @param {SentNewsAlertCreateArgs} args - Arguments to create a SentNewsAlert.
     * @example
     * // Create one SentNewsAlert
     * const SentNewsAlert = await prisma.sentNewsAlert.create({
     *   data: {
     *     // ... data to create a SentNewsAlert
     *   }
     * })
     * 
     */
    create<T extends SentNewsAlertCreateArgs>(args: SelectSubset<T, SentNewsAlertCreateArgs<ExtArgs>>): Prisma__SentNewsAlertClient<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SentNewsAlerts.
     * @param {SentNewsAlertCreateManyArgs} args - Arguments to create many SentNewsAlerts.
     * @example
     * // Create many SentNewsAlerts
     * const sentNewsAlert = await prisma.sentNewsAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SentNewsAlertCreateManyArgs>(args?: SelectSubset<T, SentNewsAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SentNewsAlerts and returns the data saved in the database.
     * @param {SentNewsAlertCreateManyAndReturnArgs} args - Arguments to create many SentNewsAlerts.
     * @example
     * // Create many SentNewsAlerts
     * const sentNewsAlert = await prisma.sentNewsAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SentNewsAlerts and only return the `id`
     * const sentNewsAlertWithIdOnly = await prisma.sentNewsAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SentNewsAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, SentNewsAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SentNewsAlert.
     * @param {SentNewsAlertDeleteArgs} args - Arguments to delete one SentNewsAlert.
     * @example
     * // Delete one SentNewsAlert
     * const SentNewsAlert = await prisma.sentNewsAlert.delete({
     *   where: {
     *     // ... filter to delete one SentNewsAlert
     *   }
     * })
     * 
     */
    delete<T extends SentNewsAlertDeleteArgs>(args: SelectSubset<T, SentNewsAlertDeleteArgs<ExtArgs>>): Prisma__SentNewsAlertClient<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SentNewsAlert.
     * @param {SentNewsAlertUpdateArgs} args - Arguments to update one SentNewsAlert.
     * @example
     * // Update one SentNewsAlert
     * const sentNewsAlert = await prisma.sentNewsAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SentNewsAlertUpdateArgs>(args: SelectSubset<T, SentNewsAlertUpdateArgs<ExtArgs>>): Prisma__SentNewsAlertClient<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SentNewsAlerts.
     * @param {SentNewsAlertDeleteManyArgs} args - Arguments to filter SentNewsAlerts to delete.
     * @example
     * // Delete a few SentNewsAlerts
     * const { count } = await prisma.sentNewsAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SentNewsAlertDeleteManyArgs>(args?: SelectSubset<T, SentNewsAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentNewsAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentNewsAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SentNewsAlerts
     * const sentNewsAlert = await prisma.sentNewsAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SentNewsAlertUpdateManyArgs>(args: SelectSubset<T, SentNewsAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SentNewsAlerts and returns the data updated in the database.
     * @param {SentNewsAlertUpdateManyAndReturnArgs} args - Arguments to update many SentNewsAlerts.
     * @example
     * // Update many SentNewsAlerts
     * const sentNewsAlert = await prisma.sentNewsAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SentNewsAlerts and only return the `id`
     * const sentNewsAlertWithIdOnly = await prisma.sentNewsAlert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SentNewsAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, SentNewsAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SentNewsAlert.
     * @param {SentNewsAlertUpsertArgs} args - Arguments to update or create a SentNewsAlert.
     * @example
     * // Update or create a SentNewsAlert
     * const sentNewsAlert = await prisma.sentNewsAlert.upsert({
     *   create: {
     *     // ... data to create a SentNewsAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SentNewsAlert we want to update
     *   }
     * })
     */
    upsert<T extends SentNewsAlertUpsertArgs>(args: SelectSubset<T, SentNewsAlertUpsertArgs<ExtArgs>>): Prisma__SentNewsAlertClient<$Result.GetResult<Prisma.$SentNewsAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SentNewsAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentNewsAlertCountArgs} args - Arguments to filter SentNewsAlerts to count.
     * @example
     * // Count the number of SentNewsAlerts
     * const count = await prisma.sentNewsAlert.count({
     *   where: {
     *     // ... the filter for the SentNewsAlerts we want to count
     *   }
     * })
    **/
    count<T extends SentNewsAlertCountArgs>(
      args?: Subset<T, SentNewsAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentNewsAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SentNewsAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentNewsAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SentNewsAlertAggregateArgs>(args: Subset<T, SentNewsAlertAggregateArgs>): Prisma.PrismaPromise<GetSentNewsAlertAggregateType<T>>

    /**
     * Group by SentNewsAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentNewsAlertGroupByArgs} args - Group by arguments.
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
      T extends SentNewsAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentNewsAlertGroupByArgs['orderBy'] }
        : { orderBy?: SentNewsAlertGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SentNewsAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentNewsAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SentNewsAlert model
   */
  readonly fields: SentNewsAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SentNewsAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SentNewsAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    newsEvent<T extends NewsEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsEventDefaultArgs<ExtArgs>>): Prisma__NewsEventClient<$Result.GetResult<Prisma.$NewsEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SentNewsAlert model
   */
  interface SentNewsAlertFieldRefs {
    readonly id: FieldRef<"SentNewsAlert", 'String'>
    readonly userId: FieldRef<"SentNewsAlert", 'String'>
    readonly newsEventId: FieldRef<"SentNewsAlert", 'String'>
    readonly alertType: FieldRef<"SentNewsAlert", 'AlertType'>
    readonly sentAt: FieldRef<"SentNewsAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SentNewsAlert findUnique
   */
  export type SentNewsAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * Filter, which SentNewsAlert to fetch.
     */
    where: SentNewsAlertWhereUniqueInput
  }

  /**
   * SentNewsAlert findUniqueOrThrow
   */
  export type SentNewsAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * Filter, which SentNewsAlert to fetch.
     */
    where: SentNewsAlertWhereUniqueInput
  }

  /**
   * SentNewsAlert findFirst
   */
  export type SentNewsAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * Filter, which SentNewsAlert to fetch.
     */
    where?: SentNewsAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentNewsAlerts to fetch.
     */
    orderBy?: SentNewsAlertOrderByWithRelationInput | SentNewsAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentNewsAlerts.
     */
    cursor?: SentNewsAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentNewsAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentNewsAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentNewsAlerts.
     */
    distinct?: SentNewsAlertScalarFieldEnum | SentNewsAlertScalarFieldEnum[]
  }

  /**
   * SentNewsAlert findFirstOrThrow
   */
  export type SentNewsAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * Filter, which SentNewsAlert to fetch.
     */
    where?: SentNewsAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentNewsAlerts to fetch.
     */
    orderBy?: SentNewsAlertOrderByWithRelationInput | SentNewsAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SentNewsAlerts.
     */
    cursor?: SentNewsAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentNewsAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentNewsAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentNewsAlerts.
     */
    distinct?: SentNewsAlertScalarFieldEnum | SentNewsAlertScalarFieldEnum[]
  }

  /**
   * SentNewsAlert findMany
   */
  export type SentNewsAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * Filter, which SentNewsAlerts to fetch.
     */
    where?: SentNewsAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SentNewsAlerts to fetch.
     */
    orderBy?: SentNewsAlertOrderByWithRelationInput | SentNewsAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SentNewsAlerts.
     */
    cursor?: SentNewsAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SentNewsAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SentNewsAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SentNewsAlerts.
     */
    distinct?: SentNewsAlertScalarFieldEnum | SentNewsAlertScalarFieldEnum[]
  }

  /**
   * SentNewsAlert create
   */
  export type SentNewsAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a SentNewsAlert.
     */
    data: XOR<SentNewsAlertCreateInput, SentNewsAlertUncheckedCreateInput>
  }

  /**
   * SentNewsAlert createMany
   */
  export type SentNewsAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SentNewsAlerts.
     */
    data: SentNewsAlertCreateManyInput | SentNewsAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SentNewsAlert createManyAndReturn
   */
  export type SentNewsAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * The data used to create many SentNewsAlerts.
     */
    data: SentNewsAlertCreateManyInput | SentNewsAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentNewsAlert update
   */
  export type SentNewsAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a SentNewsAlert.
     */
    data: XOR<SentNewsAlertUpdateInput, SentNewsAlertUncheckedUpdateInput>
    /**
     * Choose, which SentNewsAlert to update.
     */
    where: SentNewsAlertWhereUniqueInput
  }

  /**
   * SentNewsAlert updateMany
   */
  export type SentNewsAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SentNewsAlerts.
     */
    data: XOR<SentNewsAlertUpdateManyMutationInput, SentNewsAlertUncheckedUpdateManyInput>
    /**
     * Filter which SentNewsAlerts to update
     */
    where?: SentNewsAlertWhereInput
    /**
     * Limit how many SentNewsAlerts to update.
     */
    limit?: number
  }

  /**
   * SentNewsAlert updateManyAndReturn
   */
  export type SentNewsAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * The data used to update SentNewsAlerts.
     */
    data: XOR<SentNewsAlertUpdateManyMutationInput, SentNewsAlertUncheckedUpdateManyInput>
    /**
     * Filter which SentNewsAlerts to update
     */
    where?: SentNewsAlertWhereInput
    /**
     * Limit how many SentNewsAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SentNewsAlert upsert
   */
  export type SentNewsAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the SentNewsAlert to update in case it exists.
     */
    where: SentNewsAlertWhereUniqueInput
    /**
     * In case the SentNewsAlert found by the `where` argument doesn't exist, create a new SentNewsAlert with this data.
     */
    create: XOR<SentNewsAlertCreateInput, SentNewsAlertUncheckedCreateInput>
    /**
     * In case the SentNewsAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentNewsAlertUpdateInput, SentNewsAlertUncheckedUpdateInput>
  }

  /**
   * SentNewsAlert delete
   */
  export type SentNewsAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
    /**
     * Filter which SentNewsAlert to delete.
     */
    where: SentNewsAlertWhereUniqueInput
  }

  /**
   * SentNewsAlert deleteMany
   */
  export type SentNewsAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SentNewsAlerts to delete
     */
    where?: SentNewsAlertWhereInput
    /**
     * Limit how many SentNewsAlerts to delete.
     */
    limit?: number
  }

  /**
   * SentNewsAlert without action
   */
  export type SentNewsAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SentNewsAlert
     */
    select?: SentNewsAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SentNewsAlert
     */
    omit?: SentNewsAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SentNewsAlertInclude<ExtArgs> | null
  }


  /**
   * Model CoachingLog
   */

  export type AggregateCoachingLog = {
    _count: CoachingLogCountAggregateOutputType | null
    _min: CoachingLogMinAggregateOutputType | null
    _max: CoachingLogMaxAggregateOutputType | null
  }

  export type CoachingLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    source: string | null
    triggerType: string | null
    inputText: string | null
    outputText: string | null
    createdAt: Date | null
  }

  export type CoachingLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    source: string | null
    triggerType: string | null
    inputText: string | null
    outputText: string | null
    createdAt: Date | null
  }

  export type CoachingLogCountAggregateOutputType = {
    id: number
    userId: number
    source: number
    triggerType: number
    inputText: number
    outputText: number
    createdAt: number
    _all: number
  }


  export type CoachingLogMinAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    triggerType?: true
    inputText?: true
    outputText?: true
    createdAt?: true
  }

  export type CoachingLogMaxAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    triggerType?: true
    inputText?: true
    outputText?: true
    createdAt?: true
  }

  export type CoachingLogCountAggregateInputType = {
    id?: true
    userId?: true
    source?: true
    triggerType?: true
    inputText?: true
    outputText?: true
    createdAt?: true
    _all?: true
  }

  export type CoachingLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingLog to aggregate.
     */
    where?: CoachingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingLogs to fetch.
     */
    orderBy?: CoachingLogOrderByWithRelationInput | CoachingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachingLogs
    **/
    _count?: true | CoachingLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachingLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachingLogMaxAggregateInputType
  }

  export type GetCoachingLogAggregateType<T extends CoachingLogAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachingLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachingLog[P]>
      : GetScalarType<T[P], AggregateCoachingLog[P]>
  }




  export type CoachingLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachingLogWhereInput
    orderBy?: CoachingLogOrderByWithAggregationInput | CoachingLogOrderByWithAggregationInput[]
    by: CoachingLogScalarFieldEnum[] | CoachingLogScalarFieldEnum
    having?: CoachingLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachingLogCountAggregateInputType | true
    _min?: CoachingLogMinAggregateInputType
    _max?: CoachingLogMaxAggregateInputType
  }

  export type CoachingLogGroupByOutputType = {
    id: string
    userId: string
    source: string
    triggerType: string
    inputText: string
    outputText: string
    createdAt: Date
    _count: CoachingLogCountAggregateOutputType | null
    _min: CoachingLogMinAggregateOutputType | null
    _max: CoachingLogMaxAggregateOutputType | null
  }

  type GetCoachingLogGroupByPayload<T extends CoachingLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachingLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachingLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachingLogGroupByOutputType[P]>
            : GetScalarType<T[P], CoachingLogGroupByOutputType[P]>
        }
      >
    >


  export type CoachingLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    triggerType?: boolean
    inputText?: boolean
    outputText?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingLog"]>

  export type CoachingLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    triggerType?: boolean
    inputText?: boolean
    outputText?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingLog"]>

  export type CoachingLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    source?: boolean
    triggerType?: boolean
    inputText?: boolean
    outputText?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachingLog"]>

  export type CoachingLogSelectScalar = {
    id?: boolean
    userId?: boolean
    source?: boolean
    triggerType?: boolean
    inputText?: boolean
    outputText?: boolean
    createdAt?: boolean
  }

  export type CoachingLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "source" | "triggerType" | "inputText" | "outputText" | "createdAt", ExtArgs["result"]["coachingLog"]>
  export type CoachingLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachingLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachingLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoachingLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachingLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      source: string
      triggerType: string
      inputText: string
      outputText: string
      createdAt: Date
    }, ExtArgs["result"]["coachingLog"]>
    composites: {}
  }

  type CoachingLogGetPayload<S extends boolean | null | undefined | CoachingLogDefaultArgs> = $Result.GetResult<Prisma.$CoachingLogPayload, S>

  type CoachingLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachingLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachingLogCountAggregateInputType | true
    }

  export interface CoachingLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachingLog'], meta: { name: 'CoachingLog' } }
    /**
     * Find zero or one CoachingLog that matches the filter.
     * @param {CoachingLogFindUniqueArgs} args - Arguments to find a CoachingLog
     * @example
     * // Get one CoachingLog
     * const coachingLog = await prisma.coachingLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachingLogFindUniqueArgs>(args: SelectSubset<T, CoachingLogFindUniqueArgs<ExtArgs>>): Prisma__CoachingLogClient<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoachingLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachingLogFindUniqueOrThrowArgs} args - Arguments to find a CoachingLog
     * @example
     * // Get one CoachingLog
     * const coachingLog = await prisma.coachingLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachingLogFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachingLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachingLogClient<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachingLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingLogFindFirstArgs} args - Arguments to find a CoachingLog
     * @example
     * // Get one CoachingLog
     * const coachingLog = await prisma.coachingLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachingLogFindFirstArgs>(args?: SelectSubset<T, CoachingLogFindFirstArgs<ExtArgs>>): Prisma__CoachingLogClient<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachingLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingLogFindFirstOrThrowArgs} args - Arguments to find a CoachingLog
     * @example
     * // Get one CoachingLog
     * const coachingLog = await prisma.coachingLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachingLogFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachingLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachingLogClient<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoachingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachingLogs
     * const coachingLogs = await prisma.coachingLog.findMany()
     * 
     * // Get first 10 CoachingLogs
     * const coachingLogs = await prisma.coachingLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachingLogWithIdOnly = await prisma.coachingLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachingLogFindManyArgs>(args?: SelectSubset<T, CoachingLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoachingLog.
     * @param {CoachingLogCreateArgs} args - Arguments to create a CoachingLog.
     * @example
     * // Create one CoachingLog
     * const CoachingLog = await prisma.coachingLog.create({
     *   data: {
     *     // ... data to create a CoachingLog
     *   }
     * })
     * 
     */
    create<T extends CoachingLogCreateArgs>(args: SelectSubset<T, CoachingLogCreateArgs<ExtArgs>>): Prisma__CoachingLogClient<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoachingLogs.
     * @param {CoachingLogCreateManyArgs} args - Arguments to create many CoachingLogs.
     * @example
     * // Create many CoachingLogs
     * const coachingLog = await prisma.coachingLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachingLogCreateManyArgs>(args?: SelectSubset<T, CoachingLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachingLogs and returns the data saved in the database.
     * @param {CoachingLogCreateManyAndReturnArgs} args - Arguments to create many CoachingLogs.
     * @example
     * // Create many CoachingLogs
     * const coachingLog = await prisma.coachingLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachingLogs and only return the `id`
     * const coachingLogWithIdOnly = await prisma.coachingLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachingLogCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachingLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoachingLog.
     * @param {CoachingLogDeleteArgs} args - Arguments to delete one CoachingLog.
     * @example
     * // Delete one CoachingLog
     * const CoachingLog = await prisma.coachingLog.delete({
     *   where: {
     *     // ... filter to delete one CoachingLog
     *   }
     * })
     * 
     */
    delete<T extends CoachingLogDeleteArgs>(args: SelectSubset<T, CoachingLogDeleteArgs<ExtArgs>>): Prisma__CoachingLogClient<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoachingLog.
     * @param {CoachingLogUpdateArgs} args - Arguments to update one CoachingLog.
     * @example
     * // Update one CoachingLog
     * const coachingLog = await prisma.coachingLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachingLogUpdateArgs>(args: SelectSubset<T, CoachingLogUpdateArgs<ExtArgs>>): Prisma__CoachingLogClient<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoachingLogs.
     * @param {CoachingLogDeleteManyArgs} args - Arguments to filter CoachingLogs to delete.
     * @example
     * // Delete a few CoachingLogs
     * const { count } = await prisma.coachingLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachingLogDeleteManyArgs>(args?: SelectSubset<T, CoachingLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachingLogs
     * const coachingLog = await prisma.coachingLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachingLogUpdateManyArgs>(args: SelectSubset<T, CoachingLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachingLogs and returns the data updated in the database.
     * @param {CoachingLogUpdateManyAndReturnArgs} args - Arguments to update many CoachingLogs.
     * @example
     * // Update many CoachingLogs
     * const coachingLog = await prisma.coachingLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoachingLogs and only return the `id`
     * const coachingLogWithIdOnly = await prisma.coachingLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoachingLogUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachingLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoachingLog.
     * @param {CoachingLogUpsertArgs} args - Arguments to update or create a CoachingLog.
     * @example
     * // Update or create a CoachingLog
     * const coachingLog = await prisma.coachingLog.upsert({
     *   create: {
     *     // ... data to create a CoachingLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachingLog we want to update
     *   }
     * })
     */
    upsert<T extends CoachingLogUpsertArgs>(args: SelectSubset<T, CoachingLogUpsertArgs<ExtArgs>>): Prisma__CoachingLogClient<$Result.GetResult<Prisma.$CoachingLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoachingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingLogCountArgs} args - Arguments to filter CoachingLogs to count.
     * @example
     * // Count the number of CoachingLogs
     * const count = await prisma.coachingLog.count({
     *   where: {
     *     // ... the filter for the CoachingLogs we want to count
     *   }
     * })
    **/
    count<T extends CoachingLogCountArgs>(
      args?: Subset<T, CoachingLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachingLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachingLogAggregateArgs>(args: Subset<T, CoachingLogAggregateArgs>): Prisma.PrismaPromise<GetCoachingLogAggregateType<T>>

    /**
     * Group by CoachingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachingLogGroupByArgs} args - Group by arguments.
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
      T extends CoachingLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachingLogGroupByArgs['orderBy'] }
        : { orderBy?: CoachingLogGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoachingLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachingLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachingLog model
   */
  readonly fields: CoachingLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachingLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachingLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoachingLog model
   */
  interface CoachingLogFieldRefs {
    readonly id: FieldRef<"CoachingLog", 'String'>
    readonly userId: FieldRef<"CoachingLog", 'String'>
    readonly source: FieldRef<"CoachingLog", 'String'>
    readonly triggerType: FieldRef<"CoachingLog", 'String'>
    readonly inputText: FieldRef<"CoachingLog", 'String'>
    readonly outputText: FieldRef<"CoachingLog", 'String'>
    readonly createdAt: FieldRef<"CoachingLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachingLog findUnique
   */
  export type CoachingLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * Filter, which CoachingLog to fetch.
     */
    where: CoachingLogWhereUniqueInput
  }

  /**
   * CoachingLog findUniqueOrThrow
   */
  export type CoachingLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * Filter, which CoachingLog to fetch.
     */
    where: CoachingLogWhereUniqueInput
  }

  /**
   * CoachingLog findFirst
   */
  export type CoachingLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * Filter, which CoachingLog to fetch.
     */
    where?: CoachingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingLogs to fetch.
     */
    orderBy?: CoachingLogOrderByWithRelationInput | CoachingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingLogs.
     */
    cursor?: CoachingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingLogs.
     */
    distinct?: CoachingLogScalarFieldEnum | CoachingLogScalarFieldEnum[]
  }

  /**
   * CoachingLog findFirstOrThrow
   */
  export type CoachingLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * Filter, which CoachingLog to fetch.
     */
    where?: CoachingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingLogs to fetch.
     */
    orderBy?: CoachingLogOrderByWithRelationInput | CoachingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachingLogs.
     */
    cursor?: CoachingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingLogs.
     */
    distinct?: CoachingLogScalarFieldEnum | CoachingLogScalarFieldEnum[]
  }

  /**
   * CoachingLog findMany
   */
  export type CoachingLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * Filter, which CoachingLogs to fetch.
     */
    where?: CoachingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachingLogs to fetch.
     */
    orderBy?: CoachingLogOrderByWithRelationInput | CoachingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachingLogs.
     */
    cursor?: CoachingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachingLogs.
     */
    distinct?: CoachingLogScalarFieldEnum | CoachingLogScalarFieldEnum[]
  }

  /**
   * CoachingLog create
   */
  export type CoachingLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachingLog.
     */
    data: XOR<CoachingLogCreateInput, CoachingLogUncheckedCreateInput>
  }

  /**
   * CoachingLog createMany
   */
  export type CoachingLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachingLogs.
     */
    data: CoachingLogCreateManyInput | CoachingLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachingLog createManyAndReturn
   */
  export type CoachingLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * The data used to create many CoachingLogs.
     */
    data: CoachingLogCreateManyInput | CoachingLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingLog update
   */
  export type CoachingLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachingLog.
     */
    data: XOR<CoachingLogUpdateInput, CoachingLogUncheckedUpdateInput>
    /**
     * Choose, which CoachingLog to update.
     */
    where: CoachingLogWhereUniqueInput
  }

  /**
   * CoachingLog updateMany
   */
  export type CoachingLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachingLogs.
     */
    data: XOR<CoachingLogUpdateManyMutationInput, CoachingLogUncheckedUpdateManyInput>
    /**
     * Filter which CoachingLogs to update
     */
    where?: CoachingLogWhereInput
    /**
     * Limit how many CoachingLogs to update.
     */
    limit?: number
  }

  /**
   * CoachingLog updateManyAndReturn
   */
  export type CoachingLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * The data used to update CoachingLogs.
     */
    data: XOR<CoachingLogUpdateManyMutationInput, CoachingLogUncheckedUpdateManyInput>
    /**
     * Filter which CoachingLogs to update
     */
    where?: CoachingLogWhereInput
    /**
     * Limit how many CoachingLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachingLog upsert
   */
  export type CoachingLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachingLog to update in case it exists.
     */
    where: CoachingLogWhereUniqueInput
    /**
     * In case the CoachingLog found by the `where` argument doesn't exist, create a new CoachingLog with this data.
     */
    create: XOR<CoachingLogCreateInput, CoachingLogUncheckedCreateInput>
    /**
     * In case the CoachingLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachingLogUpdateInput, CoachingLogUncheckedUpdateInput>
  }

  /**
   * CoachingLog delete
   */
  export type CoachingLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
    /**
     * Filter which CoachingLog to delete.
     */
    where: CoachingLogWhereUniqueInput
  }

  /**
   * CoachingLog deleteMany
   */
  export type CoachingLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachingLogs to delete
     */
    where?: CoachingLogWhereInput
    /**
     * Limit how many CoachingLogs to delete.
     */
    limit?: number
  }

  /**
   * CoachingLog without action
   */
  export type CoachingLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachingLog
     */
    select?: CoachingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachingLog
     */
    omit?: CoachingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachingLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    subscriptionStatus: 'subscriptionStatus',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TelegramConnectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    telegramUserId: 'telegramUserId',
    telegramChatId: 'telegramChatId',
    botConnectedAt: 'botConnectedAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TelegramConnectionScalarFieldEnum = (typeof TelegramConnectionScalarFieldEnum)[keyof typeof TelegramConnectionScalarFieldEnum]


  export const TraderProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    market: 'market',
    tradingStyle: 'tradingStyle',
    experienceYears: 'experienceYears',
    tradingDays: 'tradingDays',
    tradingSession: 'tradingSession',
    timezone: 'timezone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TraderProfileScalarFieldEnum = (typeof TraderProfileScalarFieldEnum)[keyof typeof TraderProfileScalarFieldEnum]


  export const RiskRulesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accountSize: 'accountSize',
    dailyLossLimit: 'dailyLossLimit',
    riskPerTrade: 'riskPerTrade',
    maxTradesPerDay: 'maxTradesPerDay',
    stopAfterLosses: 'stopAfterLosses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiskRulesScalarFieldEnum = (typeof RiskRulesScalarFieldEnum)[keyof typeof RiskRulesScalarFieldEnum]


  export const TradingRulesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    allowedSetups: 'allowedSetups',
    forbiddenConditions: 'forbiddenConditions',
    requiredBeforeEntry: 'requiredBeforeEntry',
    invalidationRules: 'invalidationRules',
    allowedHours: 'allowedHours',
    forbiddenHours: 'forbiddenHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TradingRulesScalarFieldEnum = (typeof TradingRulesScalarFieldEnum)[keyof typeof TradingRulesScalarFieldEnum]


  export const MentalProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mainWeaknesses: 'mainWeaknesses',
    tiltTrigger: 'tiltTrigger',
    tiltThoughts: 'tiltThoughts',
    coachingTone: 'coachingTone',
    interruptionStyle: 'interruptionStyle',
    responseStyle: 'responseStyle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MentalProfileScalarFieldEnum = (typeof MentalProfileScalarFieldEnum)[keyof typeof MentalProfileScalarFieldEnum]


  export const CoachingPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    premarketCheckinEnabled: 'premarketCheckinEnabled',
    postmarketReviewEnabled: 'postmarketReviewEnabled',
    checkinFormat: 'checkinFormat',
    reviewFocus: 'reviewFocus',
    newsAlertsEnabled: 'newsAlertsEnabled',
    preNewsMinutes: 'preNewsMinutes',
    highImpactOnly: 'highImpactOnly',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoachingPreferencesScalarFieldEnum = (typeof CoachingPreferencesScalarFieldEnum)[keyof typeof CoachingPreferencesScalarFieldEnum]


  export const NewsEventScalarFieldEnum: {
    id: 'id',
    providerEventId: 'providerEventId',
    title: 'title',
    startsAtUtc: 'startsAtUtc',
    country: 'country',
    impactLevel: 'impactLevel',
    category: 'category',
    relevantMarkets: 'relevantMarkets',
    source: 'source',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsEventScalarFieldEnum = (typeof NewsEventScalarFieldEnum)[keyof typeof NewsEventScalarFieldEnum]


  export const SentNewsAlertScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    newsEventId: 'newsEventId',
    alertType: 'alertType',
    sentAt: 'sentAt'
  };

  export type SentNewsAlertScalarFieldEnum = (typeof SentNewsAlertScalarFieldEnum)[keyof typeof SentNewsAlertScalarFieldEnum]


  export const CoachingLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    source: 'source',
    triggerType: 'triggerType',
    inputText: 'inputText',
    outputText: 'outputText',
    createdAt: 'createdAt'
  };

  export type CoachingLogScalarFieldEnum = (typeof CoachingLogScalarFieldEnum)[keyof typeof CoachingLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TradingStyle'
   */
  export type EnumTradingStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradingStyle'>
    


  /**
   * Reference to a field of type 'TradingStyle[]'
   */
  export type ListEnumTradingStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TradingStyle[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CoachingTone'
   */
  export type EnumCoachingToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoachingTone'>
    


  /**
   * Reference to a field of type 'CoachingTone[]'
   */
  export type ListEnumCoachingToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CoachingTone[]'>
    


  /**
   * Reference to a field of type 'ResponseStyle'
   */
  export type EnumResponseStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseStyle'>
    


  /**
   * Reference to a field of type 'ResponseStyle[]'
   */
  export type ListEnumResponseStyleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseStyle[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    subscriptionStatus?: EnumSubscriptionStatusFilter<"User"> | $Enums.SubscriptionStatus
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    telegramConnection?: XOR<TelegramConnectionNullableScalarRelationFilter, TelegramConnectionWhereInput> | null
    traderProfile?: XOR<TraderProfileNullableScalarRelationFilter, TraderProfileWhereInput> | null
    riskRules?: XOR<RiskRulesNullableScalarRelationFilter, RiskRulesWhereInput> | null
    tradingRules?: XOR<TradingRulesNullableScalarRelationFilter, TradingRulesWhereInput> | null
    mentalProfile?: XOR<MentalProfileNullableScalarRelationFilter, MentalProfileWhereInput> | null
    coachingPreferences?: XOR<CoachingPreferencesNullableScalarRelationFilter, CoachingPreferencesWhereInput> | null
    sentNewsAlerts?: SentNewsAlertListRelationFilter
    coachingLogs?: CoachingLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    telegramConnection?: TelegramConnectionOrderByWithRelationInput
    traderProfile?: TraderProfileOrderByWithRelationInput
    riskRules?: RiskRulesOrderByWithRelationInput
    tradingRules?: TradingRulesOrderByWithRelationInput
    mentalProfile?: MentalProfileOrderByWithRelationInput
    coachingPreferences?: CoachingPreferencesOrderByWithRelationInput
    sentNewsAlerts?: SentNewsAlertOrderByRelationAggregateInput
    coachingLogs?: CoachingLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    subscriptionStatus?: EnumSubscriptionStatusFilter<"User"> | $Enums.SubscriptionStatus
    stripeCustomerId?: StringNullableFilter<"User"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    telegramConnection?: XOR<TelegramConnectionNullableScalarRelationFilter, TelegramConnectionWhereInput> | null
    traderProfile?: XOR<TraderProfileNullableScalarRelationFilter, TraderProfileWhereInput> | null
    riskRules?: XOR<RiskRulesNullableScalarRelationFilter, RiskRulesWhereInput> | null
    tradingRules?: XOR<TradingRulesNullableScalarRelationFilter, TradingRulesWhereInput> | null
    mentalProfile?: XOR<MentalProfileNullableScalarRelationFilter, MentalProfileWhereInput> | null
    coachingPreferences?: XOR<CoachingPreferencesNullableScalarRelationFilter, CoachingPreferencesWhereInput> | null
    sentNewsAlerts?: SentNewsAlertListRelationFilter
    coachingLogs?: CoachingLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    subscriptionStatus?: EnumSubscriptionStatusWithAggregatesFilter<"User"> | $Enums.SubscriptionStatus
    stripeCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TelegramConnectionWhereInput = {
    AND?: TelegramConnectionWhereInput | TelegramConnectionWhereInput[]
    OR?: TelegramConnectionWhereInput[]
    NOT?: TelegramConnectionWhereInput | TelegramConnectionWhereInput[]
    id?: StringFilter<"TelegramConnection"> | string
    userId?: StringFilter<"TelegramConnection"> | string
    telegramUserId?: StringFilter<"TelegramConnection"> | string
    telegramChatId?: StringFilter<"TelegramConnection"> | string
    botConnectedAt?: DateTimeNullableFilter<"TelegramConnection"> | Date | string | null
    status?: StringFilter<"TelegramConnection"> | string
    createdAt?: DateTimeFilter<"TelegramConnection"> | Date | string
    updatedAt?: DateTimeFilter<"TelegramConnection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TelegramConnectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramUserId?: SortOrder
    telegramChatId?: SortOrder
    botConnectedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TelegramConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    telegramUserId?: string
    telegramChatId?: string
    AND?: TelegramConnectionWhereInput | TelegramConnectionWhereInput[]
    OR?: TelegramConnectionWhereInput[]
    NOT?: TelegramConnectionWhereInput | TelegramConnectionWhereInput[]
    botConnectedAt?: DateTimeNullableFilter<"TelegramConnection"> | Date | string | null
    status?: StringFilter<"TelegramConnection"> | string
    createdAt?: DateTimeFilter<"TelegramConnection"> | Date | string
    updatedAt?: DateTimeFilter<"TelegramConnection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "telegramUserId" | "telegramChatId">

  export type TelegramConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramUserId?: SortOrder
    telegramChatId?: SortOrder
    botConnectedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TelegramConnectionCountOrderByAggregateInput
    _max?: TelegramConnectionMaxOrderByAggregateInput
    _min?: TelegramConnectionMinOrderByAggregateInput
  }

  export type TelegramConnectionScalarWhereWithAggregatesInput = {
    AND?: TelegramConnectionScalarWhereWithAggregatesInput | TelegramConnectionScalarWhereWithAggregatesInput[]
    OR?: TelegramConnectionScalarWhereWithAggregatesInput[]
    NOT?: TelegramConnectionScalarWhereWithAggregatesInput | TelegramConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelegramConnection"> | string
    userId?: StringWithAggregatesFilter<"TelegramConnection"> | string
    telegramUserId?: StringWithAggregatesFilter<"TelegramConnection"> | string
    telegramChatId?: StringWithAggregatesFilter<"TelegramConnection"> | string
    botConnectedAt?: DateTimeNullableWithAggregatesFilter<"TelegramConnection"> | Date | string | null
    status?: StringWithAggregatesFilter<"TelegramConnection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TelegramConnection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TelegramConnection"> | Date | string
  }

  export type TraderProfileWhereInput = {
    AND?: TraderProfileWhereInput | TraderProfileWhereInput[]
    OR?: TraderProfileWhereInput[]
    NOT?: TraderProfileWhereInput | TraderProfileWhereInput[]
    id?: StringFilter<"TraderProfile"> | string
    userId?: StringFilter<"TraderProfile"> | string
    market?: StringFilter<"TraderProfile"> | string
    tradingStyle?: EnumTradingStyleFilter<"TraderProfile"> | $Enums.TradingStyle
    experienceYears?: IntFilter<"TraderProfile"> | number
    tradingDays?: StringFilter<"TraderProfile"> | string
    tradingSession?: StringFilter<"TraderProfile"> | string
    timezone?: StringFilter<"TraderProfile"> | string
    createdAt?: DateTimeFilter<"TraderProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TraderProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TraderProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    market?: SortOrder
    tradingStyle?: SortOrder
    experienceYears?: SortOrder
    tradingDays?: SortOrder
    tradingSession?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TraderProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TraderProfileWhereInput | TraderProfileWhereInput[]
    OR?: TraderProfileWhereInput[]
    NOT?: TraderProfileWhereInput | TraderProfileWhereInput[]
    market?: StringFilter<"TraderProfile"> | string
    tradingStyle?: EnumTradingStyleFilter<"TraderProfile"> | $Enums.TradingStyle
    experienceYears?: IntFilter<"TraderProfile"> | number
    tradingDays?: StringFilter<"TraderProfile"> | string
    tradingSession?: StringFilter<"TraderProfile"> | string
    timezone?: StringFilter<"TraderProfile"> | string
    createdAt?: DateTimeFilter<"TraderProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TraderProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TraderProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    market?: SortOrder
    tradingStyle?: SortOrder
    experienceYears?: SortOrder
    tradingDays?: SortOrder
    tradingSession?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TraderProfileCountOrderByAggregateInput
    _avg?: TraderProfileAvgOrderByAggregateInput
    _max?: TraderProfileMaxOrderByAggregateInput
    _min?: TraderProfileMinOrderByAggregateInput
    _sum?: TraderProfileSumOrderByAggregateInput
  }

  export type TraderProfileScalarWhereWithAggregatesInput = {
    AND?: TraderProfileScalarWhereWithAggregatesInput | TraderProfileScalarWhereWithAggregatesInput[]
    OR?: TraderProfileScalarWhereWithAggregatesInput[]
    NOT?: TraderProfileScalarWhereWithAggregatesInput | TraderProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TraderProfile"> | string
    userId?: StringWithAggregatesFilter<"TraderProfile"> | string
    market?: StringWithAggregatesFilter<"TraderProfile"> | string
    tradingStyle?: EnumTradingStyleWithAggregatesFilter<"TraderProfile"> | $Enums.TradingStyle
    experienceYears?: IntWithAggregatesFilter<"TraderProfile"> | number
    tradingDays?: StringWithAggregatesFilter<"TraderProfile"> | string
    tradingSession?: StringWithAggregatesFilter<"TraderProfile"> | string
    timezone?: StringWithAggregatesFilter<"TraderProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TraderProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TraderProfile"> | Date | string
  }

  export type RiskRulesWhereInput = {
    AND?: RiskRulesWhereInput | RiskRulesWhereInput[]
    OR?: RiskRulesWhereInput[]
    NOT?: RiskRulesWhereInput | RiskRulesWhereInput[]
    id?: StringFilter<"RiskRules"> | string
    userId?: StringFilter<"RiskRules"> | string
    accountSize?: IntFilter<"RiskRules"> | number
    dailyLossLimit?: IntFilter<"RiskRules"> | number
    riskPerTrade?: IntFilter<"RiskRules"> | number
    maxTradesPerDay?: IntFilter<"RiskRules"> | number
    stopAfterLosses?: IntFilter<"RiskRules"> | number
    createdAt?: DateTimeFilter<"RiskRules"> | Date | string
    updatedAt?: DateTimeFilter<"RiskRules"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RiskRulesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountSize?: SortOrder
    dailyLossLimit?: SortOrder
    riskPerTrade?: SortOrder
    maxTradesPerDay?: SortOrder
    stopAfterLosses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RiskRulesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: RiskRulesWhereInput | RiskRulesWhereInput[]
    OR?: RiskRulesWhereInput[]
    NOT?: RiskRulesWhereInput | RiskRulesWhereInput[]
    accountSize?: IntFilter<"RiskRules"> | number
    dailyLossLimit?: IntFilter<"RiskRules"> | number
    riskPerTrade?: IntFilter<"RiskRules"> | number
    maxTradesPerDay?: IntFilter<"RiskRules"> | number
    stopAfterLosses?: IntFilter<"RiskRules"> | number
    createdAt?: DateTimeFilter<"RiskRules"> | Date | string
    updatedAt?: DateTimeFilter<"RiskRules"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type RiskRulesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accountSize?: SortOrder
    dailyLossLimit?: SortOrder
    riskPerTrade?: SortOrder
    maxTradesPerDay?: SortOrder
    stopAfterLosses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiskRulesCountOrderByAggregateInput
    _avg?: RiskRulesAvgOrderByAggregateInput
    _max?: RiskRulesMaxOrderByAggregateInput
    _min?: RiskRulesMinOrderByAggregateInput
    _sum?: RiskRulesSumOrderByAggregateInput
  }

  export type RiskRulesScalarWhereWithAggregatesInput = {
    AND?: RiskRulesScalarWhereWithAggregatesInput | RiskRulesScalarWhereWithAggregatesInput[]
    OR?: RiskRulesScalarWhereWithAggregatesInput[]
    NOT?: RiskRulesScalarWhereWithAggregatesInput | RiskRulesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RiskRules"> | string
    userId?: StringWithAggregatesFilter<"RiskRules"> | string
    accountSize?: IntWithAggregatesFilter<"RiskRules"> | number
    dailyLossLimit?: IntWithAggregatesFilter<"RiskRules"> | number
    riskPerTrade?: IntWithAggregatesFilter<"RiskRules"> | number
    maxTradesPerDay?: IntWithAggregatesFilter<"RiskRules"> | number
    stopAfterLosses?: IntWithAggregatesFilter<"RiskRules"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RiskRules"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RiskRules"> | Date | string
  }

  export type TradingRulesWhereInput = {
    AND?: TradingRulesWhereInput | TradingRulesWhereInput[]
    OR?: TradingRulesWhereInput[]
    NOT?: TradingRulesWhereInput | TradingRulesWhereInput[]
    id?: StringFilter<"TradingRules"> | string
    userId?: StringFilter<"TradingRules"> | string
    allowedSetups?: StringFilter<"TradingRules"> | string
    forbiddenConditions?: StringFilter<"TradingRules"> | string
    requiredBeforeEntry?: StringFilter<"TradingRules"> | string
    invalidationRules?: StringFilter<"TradingRules"> | string
    allowedHours?: StringFilter<"TradingRules"> | string
    forbiddenHours?: StringFilter<"TradingRules"> | string
    createdAt?: DateTimeFilter<"TradingRules"> | Date | string
    updatedAt?: DateTimeFilter<"TradingRules"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TradingRulesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    allowedSetups?: SortOrder
    forbiddenConditions?: SortOrder
    requiredBeforeEntry?: SortOrder
    invalidationRules?: SortOrder
    allowedHours?: SortOrder
    forbiddenHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TradingRulesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TradingRulesWhereInput | TradingRulesWhereInput[]
    OR?: TradingRulesWhereInput[]
    NOT?: TradingRulesWhereInput | TradingRulesWhereInput[]
    allowedSetups?: StringFilter<"TradingRules"> | string
    forbiddenConditions?: StringFilter<"TradingRules"> | string
    requiredBeforeEntry?: StringFilter<"TradingRules"> | string
    invalidationRules?: StringFilter<"TradingRules"> | string
    allowedHours?: StringFilter<"TradingRules"> | string
    forbiddenHours?: StringFilter<"TradingRules"> | string
    createdAt?: DateTimeFilter<"TradingRules"> | Date | string
    updatedAt?: DateTimeFilter<"TradingRules"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TradingRulesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    allowedSetups?: SortOrder
    forbiddenConditions?: SortOrder
    requiredBeforeEntry?: SortOrder
    invalidationRules?: SortOrder
    allowedHours?: SortOrder
    forbiddenHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TradingRulesCountOrderByAggregateInput
    _max?: TradingRulesMaxOrderByAggregateInput
    _min?: TradingRulesMinOrderByAggregateInput
  }

  export type TradingRulesScalarWhereWithAggregatesInput = {
    AND?: TradingRulesScalarWhereWithAggregatesInput | TradingRulesScalarWhereWithAggregatesInput[]
    OR?: TradingRulesScalarWhereWithAggregatesInput[]
    NOT?: TradingRulesScalarWhereWithAggregatesInput | TradingRulesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TradingRules"> | string
    userId?: StringWithAggregatesFilter<"TradingRules"> | string
    allowedSetups?: StringWithAggregatesFilter<"TradingRules"> | string
    forbiddenConditions?: StringWithAggregatesFilter<"TradingRules"> | string
    requiredBeforeEntry?: StringWithAggregatesFilter<"TradingRules"> | string
    invalidationRules?: StringWithAggregatesFilter<"TradingRules"> | string
    allowedHours?: StringWithAggregatesFilter<"TradingRules"> | string
    forbiddenHours?: StringWithAggregatesFilter<"TradingRules"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TradingRules"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TradingRules"> | Date | string
  }

  export type MentalProfileWhereInput = {
    AND?: MentalProfileWhereInput | MentalProfileWhereInput[]
    OR?: MentalProfileWhereInput[]
    NOT?: MentalProfileWhereInput | MentalProfileWhereInput[]
    id?: StringFilter<"MentalProfile"> | string
    userId?: StringFilter<"MentalProfile"> | string
    mainWeaknesses?: StringFilter<"MentalProfile"> | string
    tiltTrigger?: StringFilter<"MentalProfile"> | string
    tiltThoughts?: StringFilter<"MentalProfile"> | string
    coachingTone?: EnumCoachingToneFilter<"MentalProfile"> | $Enums.CoachingTone
    interruptionStyle?: StringFilter<"MentalProfile"> | string
    responseStyle?: EnumResponseStyleFilter<"MentalProfile"> | $Enums.ResponseStyle
    createdAt?: DateTimeFilter<"MentalProfile"> | Date | string
    updatedAt?: DateTimeFilter<"MentalProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MentalProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mainWeaknesses?: SortOrder
    tiltTrigger?: SortOrder
    tiltThoughts?: SortOrder
    coachingTone?: SortOrder
    interruptionStyle?: SortOrder
    responseStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MentalProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MentalProfileWhereInput | MentalProfileWhereInput[]
    OR?: MentalProfileWhereInput[]
    NOT?: MentalProfileWhereInput | MentalProfileWhereInput[]
    mainWeaknesses?: StringFilter<"MentalProfile"> | string
    tiltTrigger?: StringFilter<"MentalProfile"> | string
    tiltThoughts?: StringFilter<"MentalProfile"> | string
    coachingTone?: EnumCoachingToneFilter<"MentalProfile"> | $Enums.CoachingTone
    interruptionStyle?: StringFilter<"MentalProfile"> | string
    responseStyle?: EnumResponseStyleFilter<"MentalProfile"> | $Enums.ResponseStyle
    createdAt?: DateTimeFilter<"MentalProfile"> | Date | string
    updatedAt?: DateTimeFilter<"MentalProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MentalProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mainWeaknesses?: SortOrder
    tiltTrigger?: SortOrder
    tiltThoughts?: SortOrder
    coachingTone?: SortOrder
    interruptionStyle?: SortOrder
    responseStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MentalProfileCountOrderByAggregateInput
    _max?: MentalProfileMaxOrderByAggregateInput
    _min?: MentalProfileMinOrderByAggregateInput
  }

  export type MentalProfileScalarWhereWithAggregatesInput = {
    AND?: MentalProfileScalarWhereWithAggregatesInput | MentalProfileScalarWhereWithAggregatesInput[]
    OR?: MentalProfileScalarWhereWithAggregatesInput[]
    NOT?: MentalProfileScalarWhereWithAggregatesInput | MentalProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MentalProfile"> | string
    userId?: StringWithAggregatesFilter<"MentalProfile"> | string
    mainWeaknesses?: StringWithAggregatesFilter<"MentalProfile"> | string
    tiltTrigger?: StringWithAggregatesFilter<"MentalProfile"> | string
    tiltThoughts?: StringWithAggregatesFilter<"MentalProfile"> | string
    coachingTone?: EnumCoachingToneWithAggregatesFilter<"MentalProfile"> | $Enums.CoachingTone
    interruptionStyle?: StringWithAggregatesFilter<"MentalProfile"> | string
    responseStyle?: EnumResponseStyleWithAggregatesFilter<"MentalProfile"> | $Enums.ResponseStyle
    createdAt?: DateTimeWithAggregatesFilter<"MentalProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MentalProfile"> | Date | string
  }

  export type CoachingPreferencesWhereInput = {
    AND?: CoachingPreferencesWhereInput | CoachingPreferencesWhereInput[]
    OR?: CoachingPreferencesWhereInput[]
    NOT?: CoachingPreferencesWhereInput | CoachingPreferencesWhereInput[]
    id?: StringFilter<"CoachingPreferences"> | string
    userId?: StringFilter<"CoachingPreferences"> | string
    premarketCheckinEnabled?: BoolFilter<"CoachingPreferences"> | boolean
    postmarketReviewEnabled?: BoolFilter<"CoachingPreferences"> | boolean
    checkinFormat?: StringFilter<"CoachingPreferences"> | string
    reviewFocus?: StringFilter<"CoachingPreferences"> | string
    newsAlertsEnabled?: BoolFilter<"CoachingPreferences"> | boolean
    preNewsMinutes?: IntFilter<"CoachingPreferences"> | number
    highImpactOnly?: BoolFilter<"CoachingPreferences"> | boolean
    createdAt?: DateTimeFilter<"CoachingPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"CoachingPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoachingPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    premarketCheckinEnabled?: SortOrder
    postmarketReviewEnabled?: SortOrder
    checkinFormat?: SortOrder
    reviewFocus?: SortOrder
    newsAlertsEnabled?: SortOrder
    preNewsMinutes?: SortOrder
    highImpactOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CoachingPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CoachingPreferencesWhereInput | CoachingPreferencesWhereInput[]
    OR?: CoachingPreferencesWhereInput[]
    NOT?: CoachingPreferencesWhereInput | CoachingPreferencesWhereInput[]
    premarketCheckinEnabled?: BoolFilter<"CoachingPreferences"> | boolean
    postmarketReviewEnabled?: BoolFilter<"CoachingPreferences"> | boolean
    checkinFormat?: StringFilter<"CoachingPreferences"> | string
    reviewFocus?: StringFilter<"CoachingPreferences"> | string
    newsAlertsEnabled?: BoolFilter<"CoachingPreferences"> | boolean
    preNewsMinutes?: IntFilter<"CoachingPreferences"> | number
    highImpactOnly?: BoolFilter<"CoachingPreferences"> | boolean
    createdAt?: DateTimeFilter<"CoachingPreferences"> | Date | string
    updatedAt?: DateTimeFilter<"CoachingPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CoachingPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    premarketCheckinEnabled?: SortOrder
    postmarketReviewEnabled?: SortOrder
    checkinFormat?: SortOrder
    reviewFocus?: SortOrder
    newsAlertsEnabled?: SortOrder
    preNewsMinutes?: SortOrder
    highImpactOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoachingPreferencesCountOrderByAggregateInput
    _avg?: CoachingPreferencesAvgOrderByAggregateInput
    _max?: CoachingPreferencesMaxOrderByAggregateInput
    _min?: CoachingPreferencesMinOrderByAggregateInput
    _sum?: CoachingPreferencesSumOrderByAggregateInput
  }

  export type CoachingPreferencesScalarWhereWithAggregatesInput = {
    AND?: CoachingPreferencesScalarWhereWithAggregatesInput | CoachingPreferencesScalarWhereWithAggregatesInput[]
    OR?: CoachingPreferencesScalarWhereWithAggregatesInput[]
    NOT?: CoachingPreferencesScalarWhereWithAggregatesInput | CoachingPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachingPreferences"> | string
    userId?: StringWithAggregatesFilter<"CoachingPreferences"> | string
    premarketCheckinEnabled?: BoolWithAggregatesFilter<"CoachingPreferences"> | boolean
    postmarketReviewEnabled?: BoolWithAggregatesFilter<"CoachingPreferences"> | boolean
    checkinFormat?: StringWithAggregatesFilter<"CoachingPreferences"> | string
    reviewFocus?: StringWithAggregatesFilter<"CoachingPreferences"> | string
    newsAlertsEnabled?: BoolWithAggregatesFilter<"CoachingPreferences"> | boolean
    preNewsMinutes?: IntWithAggregatesFilter<"CoachingPreferences"> | number
    highImpactOnly?: BoolWithAggregatesFilter<"CoachingPreferences"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CoachingPreferences"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoachingPreferences"> | Date | string
  }

  export type NewsEventWhereInput = {
    AND?: NewsEventWhereInput | NewsEventWhereInput[]
    OR?: NewsEventWhereInput[]
    NOT?: NewsEventWhereInput | NewsEventWhereInput[]
    id?: StringFilter<"NewsEvent"> | string
    providerEventId?: StringNullableFilter<"NewsEvent"> | string | null
    title?: StringFilter<"NewsEvent"> | string
    startsAtUtc?: DateTimeFilter<"NewsEvent"> | Date | string
    country?: StringNullableFilter<"NewsEvent"> | string | null
    impactLevel?: StringFilter<"NewsEvent"> | string
    category?: StringNullableFilter<"NewsEvent"> | string | null
    relevantMarkets?: StringFilter<"NewsEvent"> | string
    source?: StringFilter<"NewsEvent"> | string
    createdAt?: DateTimeFilter<"NewsEvent"> | Date | string
    updatedAt?: DateTimeFilter<"NewsEvent"> | Date | string
    sentAlerts?: SentNewsAlertListRelationFilter
  }

  export type NewsEventOrderByWithRelationInput = {
    id?: SortOrder
    providerEventId?: SortOrderInput | SortOrder
    title?: SortOrder
    startsAtUtc?: SortOrder
    country?: SortOrderInput | SortOrder
    impactLevel?: SortOrder
    category?: SortOrderInput | SortOrder
    relevantMarkets?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentAlerts?: SentNewsAlertOrderByRelationAggregateInput
  }

  export type NewsEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerEventId?: string
    AND?: NewsEventWhereInput | NewsEventWhereInput[]
    OR?: NewsEventWhereInput[]
    NOT?: NewsEventWhereInput | NewsEventWhereInput[]
    title?: StringFilter<"NewsEvent"> | string
    startsAtUtc?: DateTimeFilter<"NewsEvent"> | Date | string
    country?: StringNullableFilter<"NewsEvent"> | string | null
    impactLevel?: StringFilter<"NewsEvent"> | string
    category?: StringNullableFilter<"NewsEvent"> | string | null
    relevantMarkets?: StringFilter<"NewsEvent"> | string
    source?: StringFilter<"NewsEvent"> | string
    createdAt?: DateTimeFilter<"NewsEvent"> | Date | string
    updatedAt?: DateTimeFilter<"NewsEvent"> | Date | string
    sentAlerts?: SentNewsAlertListRelationFilter
  }, "id" | "providerEventId">

  export type NewsEventOrderByWithAggregationInput = {
    id?: SortOrder
    providerEventId?: SortOrderInput | SortOrder
    title?: SortOrder
    startsAtUtc?: SortOrder
    country?: SortOrderInput | SortOrder
    impactLevel?: SortOrder
    category?: SortOrderInput | SortOrder
    relevantMarkets?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsEventCountOrderByAggregateInput
    _max?: NewsEventMaxOrderByAggregateInput
    _min?: NewsEventMinOrderByAggregateInput
  }

  export type NewsEventScalarWhereWithAggregatesInput = {
    AND?: NewsEventScalarWhereWithAggregatesInput | NewsEventScalarWhereWithAggregatesInput[]
    OR?: NewsEventScalarWhereWithAggregatesInput[]
    NOT?: NewsEventScalarWhereWithAggregatesInput | NewsEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsEvent"> | string
    providerEventId?: StringNullableWithAggregatesFilter<"NewsEvent"> | string | null
    title?: StringWithAggregatesFilter<"NewsEvent"> | string
    startsAtUtc?: DateTimeWithAggregatesFilter<"NewsEvent"> | Date | string
    country?: StringNullableWithAggregatesFilter<"NewsEvent"> | string | null
    impactLevel?: StringWithAggregatesFilter<"NewsEvent"> | string
    category?: StringNullableWithAggregatesFilter<"NewsEvent"> | string | null
    relevantMarkets?: StringWithAggregatesFilter<"NewsEvent"> | string
    source?: StringWithAggregatesFilter<"NewsEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"NewsEvent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsEvent"> | Date | string
  }

  export type SentNewsAlertWhereInput = {
    AND?: SentNewsAlertWhereInput | SentNewsAlertWhereInput[]
    OR?: SentNewsAlertWhereInput[]
    NOT?: SentNewsAlertWhereInput | SentNewsAlertWhereInput[]
    id?: StringFilter<"SentNewsAlert"> | string
    userId?: StringFilter<"SentNewsAlert"> | string
    newsEventId?: StringFilter<"SentNewsAlert"> | string
    alertType?: EnumAlertTypeFilter<"SentNewsAlert"> | $Enums.AlertType
    sentAt?: DateTimeFilter<"SentNewsAlert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsEvent?: XOR<NewsEventScalarRelationFilter, NewsEventWhereInput>
  }

  export type SentNewsAlertOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    newsEventId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
    user?: UserOrderByWithRelationInput
    newsEvent?: NewsEventOrderByWithRelationInput
  }

  export type SentNewsAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_newsEventId_alertType?: SentNewsAlertUserIdNewsEventIdAlertTypeCompoundUniqueInput
    AND?: SentNewsAlertWhereInput | SentNewsAlertWhereInput[]
    OR?: SentNewsAlertWhereInput[]
    NOT?: SentNewsAlertWhereInput | SentNewsAlertWhereInput[]
    userId?: StringFilter<"SentNewsAlert"> | string
    newsEventId?: StringFilter<"SentNewsAlert"> | string
    alertType?: EnumAlertTypeFilter<"SentNewsAlert"> | $Enums.AlertType
    sentAt?: DateTimeFilter<"SentNewsAlert"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    newsEvent?: XOR<NewsEventScalarRelationFilter, NewsEventWhereInput>
  }, "id" | "userId_newsEventId_alertType">

  export type SentNewsAlertOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    newsEventId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
    _count?: SentNewsAlertCountOrderByAggregateInput
    _max?: SentNewsAlertMaxOrderByAggregateInput
    _min?: SentNewsAlertMinOrderByAggregateInput
  }

  export type SentNewsAlertScalarWhereWithAggregatesInput = {
    AND?: SentNewsAlertScalarWhereWithAggregatesInput | SentNewsAlertScalarWhereWithAggregatesInput[]
    OR?: SentNewsAlertScalarWhereWithAggregatesInput[]
    NOT?: SentNewsAlertScalarWhereWithAggregatesInput | SentNewsAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SentNewsAlert"> | string
    userId?: StringWithAggregatesFilter<"SentNewsAlert"> | string
    newsEventId?: StringWithAggregatesFilter<"SentNewsAlert"> | string
    alertType?: EnumAlertTypeWithAggregatesFilter<"SentNewsAlert"> | $Enums.AlertType
    sentAt?: DateTimeWithAggregatesFilter<"SentNewsAlert"> | Date | string
  }

  export type CoachingLogWhereInput = {
    AND?: CoachingLogWhereInput | CoachingLogWhereInput[]
    OR?: CoachingLogWhereInput[]
    NOT?: CoachingLogWhereInput | CoachingLogWhereInput[]
    id?: StringFilter<"CoachingLog"> | string
    userId?: StringFilter<"CoachingLog"> | string
    source?: StringFilter<"CoachingLog"> | string
    triggerType?: StringFilter<"CoachingLog"> | string
    inputText?: StringFilter<"CoachingLog"> | string
    outputText?: StringFilter<"CoachingLog"> | string
    createdAt?: DateTimeFilter<"CoachingLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoachingLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    triggerType?: SortOrder
    inputText?: SortOrder
    outputText?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CoachingLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoachingLogWhereInput | CoachingLogWhereInput[]
    OR?: CoachingLogWhereInput[]
    NOT?: CoachingLogWhereInput | CoachingLogWhereInput[]
    userId?: StringFilter<"CoachingLog"> | string
    source?: StringFilter<"CoachingLog"> | string
    triggerType?: StringFilter<"CoachingLog"> | string
    inputText?: StringFilter<"CoachingLog"> | string
    outputText?: StringFilter<"CoachingLog"> | string
    createdAt?: DateTimeFilter<"CoachingLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CoachingLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    triggerType?: SortOrder
    inputText?: SortOrder
    outputText?: SortOrder
    createdAt?: SortOrder
    _count?: CoachingLogCountOrderByAggregateInput
    _max?: CoachingLogMaxOrderByAggregateInput
    _min?: CoachingLogMinOrderByAggregateInput
  }

  export type CoachingLogScalarWhereWithAggregatesInput = {
    AND?: CoachingLogScalarWhereWithAggregatesInput | CoachingLogScalarWhereWithAggregatesInput[]
    OR?: CoachingLogScalarWhereWithAggregatesInput[]
    NOT?: CoachingLogScalarWhereWithAggregatesInput | CoachingLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachingLog"> | string
    userId?: StringWithAggregatesFilter<"CoachingLog"> | string
    source?: StringWithAggregatesFilter<"CoachingLog"> | string
    triggerType?: StringWithAggregatesFilter<"CoachingLog"> | string
    inputText?: StringWithAggregatesFilter<"CoachingLog"> | string
    outputText?: StringWithAggregatesFilter<"CoachingLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoachingLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionUncheckedCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileUncheckedCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesUncheckedCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesUncheckedCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileUncheckedCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUncheckedUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUncheckedUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUncheckedUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUncheckedUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramConnectionCreateInput = {
    id?: string
    telegramUserId: string
    telegramChatId: string
    botConnectedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTelegramConnectionInput
  }

  export type TelegramConnectionUncheckedCreateInput = {
    id?: string
    userId: string
    telegramUserId: string
    telegramChatId: string
    botConnectedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramUserId?: StringFieldUpdateOperationsInput | string
    telegramChatId?: StringFieldUpdateOperationsInput | string
    botConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTelegramConnectionNestedInput
  }

  export type TelegramConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    telegramUserId?: StringFieldUpdateOperationsInput | string
    telegramChatId?: StringFieldUpdateOperationsInput | string
    botConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramConnectionCreateManyInput = {
    id?: string
    userId: string
    telegramUserId: string
    telegramChatId: string
    botConnectedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramUserId?: StringFieldUpdateOperationsInput | string
    telegramChatId?: StringFieldUpdateOperationsInput | string
    botConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    telegramUserId?: StringFieldUpdateOperationsInput | string
    telegramChatId?: StringFieldUpdateOperationsInput | string
    botConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileCreateInput = {
    id?: string
    market: string
    tradingStyle: $Enums.TradingStyle
    experienceYears: number
    tradingDays: string
    tradingSession: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTraderProfileInput
  }

  export type TraderProfileUncheckedCreateInput = {
    id?: string
    userId: string
    market: string
    tradingStyle: $Enums.TradingStyle
    experienceYears: number
    tradingDays: string
    tradingSession: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TraderProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    tradingStyle?: EnumTradingStyleFieldUpdateOperationsInput | $Enums.TradingStyle
    experienceYears?: IntFieldUpdateOperationsInput | number
    tradingDays?: StringFieldUpdateOperationsInput | string
    tradingSession?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTraderProfileNestedInput
  }

  export type TraderProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    tradingStyle?: EnumTradingStyleFieldUpdateOperationsInput | $Enums.TradingStyle
    experienceYears?: IntFieldUpdateOperationsInput | number
    tradingDays?: StringFieldUpdateOperationsInput | string
    tradingSession?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileCreateManyInput = {
    id?: string
    userId: string
    market: string
    tradingStyle: $Enums.TradingStyle
    experienceYears: number
    tradingDays: string
    tradingSession: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TraderProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    tradingStyle?: EnumTradingStyleFieldUpdateOperationsInput | $Enums.TradingStyle
    experienceYears?: IntFieldUpdateOperationsInput | number
    tradingDays?: StringFieldUpdateOperationsInput | string
    tradingSession?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    tradingStyle?: EnumTradingStyleFieldUpdateOperationsInput | $Enums.TradingStyle
    experienceYears?: IntFieldUpdateOperationsInput | number
    tradingDays?: StringFieldUpdateOperationsInput | string
    tradingSession?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRulesCreateInput = {
    id?: string
    accountSize: number
    dailyLossLimit: number
    riskPerTrade: number
    maxTradesPerDay: number
    stopAfterLosses: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRiskRulesInput
  }

  export type RiskRulesUncheckedCreateInput = {
    id?: string
    userId: string
    accountSize: number
    dailyLossLimit: number
    riskPerTrade: number
    maxTradesPerDay: number
    stopAfterLosses: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskRulesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountSize?: IntFieldUpdateOperationsInput | number
    dailyLossLimit?: IntFieldUpdateOperationsInput | number
    riskPerTrade?: IntFieldUpdateOperationsInput | number
    maxTradesPerDay?: IntFieldUpdateOperationsInput | number
    stopAfterLosses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRiskRulesNestedInput
  }

  export type RiskRulesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountSize?: IntFieldUpdateOperationsInput | number
    dailyLossLimit?: IntFieldUpdateOperationsInput | number
    riskPerTrade?: IntFieldUpdateOperationsInput | number
    maxTradesPerDay?: IntFieldUpdateOperationsInput | number
    stopAfterLosses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRulesCreateManyInput = {
    id?: string
    userId: string
    accountSize: number
    dailyLossLimit: number
    riskPerTrade: number
    maxTradesPerDay: number
    stopAfterLosses: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskRulesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountSize?: IntFieldUpdateOperationsInput | number
    dailyLossLimit?: IntFieldUpdateOperationsInput | number
    riskPerTrade?: IntFieldUpdateOperationsInput | number
    maxTradesPerDay?: IntFieldUpdateOperationsInput | number
    stopAfterLosses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRulesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accountSize?: IntFieldUpdateOperationsInput | number
    dailyLossLimit?: IntFieldUpdateOperationsInput | number
    riskPerTrade?: IntFieldUpdateOperationsInput | number
    maxTradesPerDay?: IntFieldUpdateOperationsInput | number
    stopAfterLosses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingRulesCreateInput = {
    id?: string
    allowedSetups: string
    forbiddenConditions: string
    requiredBeforeEntry: string
    invalidationRules: string
    allowedHours: string
    forbiddenHours: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTradingRulesInput
  }

  export type TradingRulesUncheckedCreateInput = {
    id?: string
    userId: string
    allowedSetups: string
    forbiddenConditions: string
    requiredBeforeEntry: string
    invalidationRules: string
    allowedHours: string
    forbiddenHours: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradingRulesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowedSetups?: StringFieldUpdateOperationsInput | string
    forbiddenConditions?: StringFieldUpdateOperationsInput | string
    requiredBeforeEntry?: StringFieldUpdateOperationsInput | string
    invalidationRules?: StringFieldUpdateOperationsInput | string
    allowedHours?: StringFieldUpdateOperationsInput | string
    forbiddenHours?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTradingRulesNestedInput
  }

  export type TradingRulesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allowedSetups?: StringFieldUpdateOperationsInput | string
    forbiddenConditions?: StringFieldUpdateOperationsInput | string
    requiredBeforeEntry?: StringFieldUpdateOperationsInput | string
    invalidationRules?: StringFieldUpdateOperationsInput | string
    allowedHours?: StringFieldUpdateOperationsInput | string
    forbiddenHours?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingRulesCreateManyInput = {
    id?: string
    userId: string
    allowedSetups: string
    forbiddenConditions: string
    requiredBeforeEntry: string
    invalidationRules: string
    allowedHours: string
    forbiddenHours: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradingRulesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowedSetups?: StringFieldUpdateOperationsInput | string
    forbiddenConditions?: StringFieldUpdateOperationsInput | string
    requiredBeforeEntry?: StringFieldUpdateOperationsInput | string
    invalidationRules?: StringFieldUpdateOperationsInput | string
    allowedHours?: StringFieldUpdateOperationsInput | string
    forbiddenHours?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingRulesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    allowedSetups?: StringFieldUpdateOperationsInput | string
    forbiddenConditions?: StringFieldUpdateOperationsInput | string
    requiredBeforeEntry?: StringFieldUpdateOperationsInput | string
    invalidationRules?: StringFieldUpdateOperationsInput | string
    allowedHours?: StringFieldUpdateOperationsInput | string
    forbiddenHours?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentalProfileCreateInput = {
    id?: string
    mainWeaknesses: string
    tiltTrigger: string
    tiltThoughts: string
    coachingTone: $Enums.CoachingTone
    interruptionStyle: string
    responseStyle: $Enums.ResponseStyle
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMentalProfileInput
  }

  export type MentalProfileUncheckedCreateInput = {
    id?: string
    userId: string
    mainWeaknesses: string
    tiltTrigger: string
    tiltThoughts: string
    coachingTone: $Enums.CoachingTone
    interruptionStyle: string
    responseStyle: $Enums.ResponseStyle
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MentalProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainWeaknesses?: StringFieldUpdateOperationsInput | string
    tiltTrigger?: StringFieldUpdateOperationsInput | string
    tiltThoughts?: StringFieldUpdateOperationsInput | string
    coachingTone?: EnumCoachingToneFieldUpdateOperationsInput | $Enums.CoachingTone
    interruptionStyle?: StringFieldUpdateOperationsInput | string
    responseStyle?: EnumResponseStyleFieldUpdateOperationsInput | $Enums.ResponseStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMentalProfileNestedInput
  }

  export type MentalProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mainWeaknesses?: StringFieldUpdateOperationsInput | string
    tiltTrigger?: StringFieldUpdateOperationsInput | string
    tiltThoughts?: StringFieldUpdateOperationsInput | string
    coachingTone?: EnumCoachingToneFieldUpdateOperationsInput | $Enums.CoachingTone
    interruptionStyle?: StringFieldUpdateOperationsInput | string
    responseStyle?: EnumResponseStyleFieldUpdateOperationsInput | $Enums.ResponseStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentalProfileCreateManyInput = {
    id?: string
    userId: string
    mainWeaknesses: string
    tiltTrigger: string
    tiltThoughts: string
    coachingTone: $Enums.CoachingTone
    interruptionStyle: string
    responseStyle: $Enums.ResponseStyle
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MentalProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainWeaknesses?: StringFieldUpdateOperationsInput | string
    tiltTrigger?: StringFieldUpdateOperationsInput | string
    tiltThoughts?: StringFieldUpdateOperationsInput | string
    coachingTone?: EnumCoachingToneFieldUpdateOperationsInput | $Enums.CoachingTone
    interruptionStyle?: StringFieldUpdateOperationsInput | string
    responseStyle?: EnumResponseStyleFieldUpdateOperationsInput | $Enums.ResponseStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentalProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mainWeaknesses?: StringFieldUpdateOperationsInput | string
    tiltTrigger?: StringFieldUpdateOperationsInput | string
    tiltThoughts?: StringFieldUpdateOperationsInput | string
    coachingTone?: EnumCoachingToneFieldUpdateOperationsInput | $Enums.CoachingTone
    interruptionStyle?: StringFieldUpdateOperationsInput | string
    responseStyle?: EnumResponseStyleFieldUpdateOperationsInput | $Enums.ResponseStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingPreferencesCreateInput = {
    id?: string
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat: string
    reviewFocus: string
    newsAlertsEnabled?: boolean
    preNewsMinutes?: number
    highImpactOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoachingPreferencesInput
  }

  export type CoachingPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat: string
    reviewFocus: string
    newsAlertsEnabled?: boolean
    preNewsMinutes?: number
    highImpactOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachingPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    premarketCheckinEnabled?: BoolFieldUpdateOperationsInput | boolean
    postmarketReviewEnabled?: BoolFieldUpdateOperationsInput | boolean
    checkinFormat?: StringFieldUpdateOperationsInput | string
    reviewFocus?: StringFieldUpdateOperationsInput | string
    newsAlertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    preNewsMinutes?: IntFieldUpdateOperationsInput | number
    highImpactOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachingPreferencesNestedInput
  }

  export type CoachingPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    premarketCheckinEnabled?: BoolFieldUpdateOperationsInput | boolean
    postmarketReviewEnabled?: BoolFieldUpdateOperationsInput | boolean
    checkinFormat?: StringFieldUpdateOperationsInput | string
    reviewFocus?: StringFieldUpdateOperationsInput | string
    newsAlertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    preNewsMinutes?: IntFieldUpdateOperationsInput | number
    highImpactOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingPreferencesCreateManyInput = {
    id?: string
    userId: string
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat: string
    reviewFocus: string
    newsAlertsEnabled?: boolean
    preNewsMinutes?: number
    highImpactOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachingPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    premarketCheckinEnabled?: BoolFieldUpdateOperationsInput | boolean
    postmarketReviewEnabled?: BoolFieldUpdateOperationsInput | boolean
    checkinFormat?: StringFieldUpdateOperationsInput | string
    reviewFocus?: StringFieldUpdateOperationsInput | string
    newsAlertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    preNewsMinutes?: IntFieldUpdateOperationsInput | number
    highImpactOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    premarketCheckinEnabled?: BoolFieldUpdateOperationsInput | boolean
    postmarketReviewEnabled?: BoolFieldUpdateOperationsInput | boolean
    checkinFormat?: StringFieldUpdateOperationsInput | string
    reviewFocus?: StringFieldUpdateOperationsInput | string
    newsAlertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    preNewsMinutes?: IntFieldUpdateOperationsInput | number
    highImpactOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEventCreateInput = {
    id?: string
    providerEventId?: string | null
    title: string
    startsAtUtc: Date | string
    country?: string | null
    impactLevel: string
    category?: string | null
    relevantMarkets: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentAlerts?: SentNewsAlertCreateNestedManyWithoutNewsEventInput
  }

  export type NewsEventUncheckedCreateInput = {
    id?: string
    providerEventId?: string | null
    title: string
    startsAtUtc: Date | string
    country?: string | null
    impactLevel: string
    category?: string | null
    relevantMarkets: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutNewsEventInput
  }

  export type NewsEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startsAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    impactLevel?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    relevantMarkets?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAlerts?: SentNewsAlertUpdateManyWithoutNewsEventNestedInput
  }

  export type NewsEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startsAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    impactLevel?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    relevantMarkets?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAlerts?: SentNewsAlertUncheckedUpdateManyWithoutNewsEventNestedInput
  }

  export type NewsEventCreateManyInput = {
    id?: string
    providerEventId?: string | null
    title: string
    startsAtUtc: Date | string
    country?: string | null
    impactLevel: string
    category?: string | null
    relevantMarkets: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startsAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    impactLevel?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    relevantMarkets?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startsAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    impactLevel?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    relevantMarkets?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentNewsAlertCreateInput = {
    id?: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
    user: UserCreateNestedOneWithoutSentNewsAlertsInput
    newsEvent: NewsEventCreateNestedOneWithoutSentAlertsInput
  }

  export type SentNewsAlertUncheckedCreateInput = {
    id?: string
    userId: string
    newsEventId: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
  }

  export type SentNewsAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSentNewsAlertsNestedInput
    newsEvent?: NewsEventUpdateOneRequiredWithoutSentAlertsNestedInput
  }

  export type SentNewsAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    newsEventId?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentNewsAlertCreateManyInput = {
    id?: string
    userId: string
    newsEventId: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
  }

  export type SentNewsAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentNewsAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    newsEventId?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingLogCreateInput = {
    id?: string
    source: string
    triggerType: string
    inputText: string
    outputText: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCoachingLogsInput
  }

  export type CoachingLogUncheckedCreateInput = {
    id?: string
    userId: string
    source: string
    triggerType: string
    inputText: string
    outputText: string
    createdAt?: Date | string
  }

  export type CoachingLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    inputText?: StringFieldUpdateOperationsInput | string
    outputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoachingLogsNestedInput
  }

  export type CoachingLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    inputText?: StringFieldUpdateOperationsInput | string
    outputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingLogCreateManyInput = {
    id?: string
    userId: string
    source: string
    triggerType: string
    inputText: string
    outputText: string
    createdAt?: Date | string
  }

  export type CoachingLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    inputText?: StringFieldUpdateOperationsInput | string
    outputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    inputText?: StringFieldUpdateOperationsInput | string
    outputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TelegramConnectionNullableScalarRelationFilter = {
    is?: TelegramConnectionWhereInput | null
    isNot?: TelegramConnectionWhereInput | null
  }

  export type TraderProfileNullableScalarRelationFilter = {
    is?: TraderProfileWhereInput | null
    isNot?: TraderProfileWhereInput | null
  }

  export type RiskRulesNullableScalarRelationFilter = {
    is?: RiskRulesWhereInput | null
    isNot?: RiskRulesWhereInput | null
  }

  export type TradingRulesNullableScalarRelationFilter = {
    is?: TradingRulesWhereInput | null
    isNot?: TradingRulesWhereInput | null
  }

  export type MentalProfileNullableScalarRelationFilter = {
    is?: MentalProfileWhereInput | null
    isNot?: MentalProfileWhereInput | null
  }

  export type CoachingPreferencesNullableScalarRelationFilter = {
    is?: CoachingPreferencesWhereInput | null
    isNot?: CoachingPreferencesWhereInput | null
  }

  export type SentNewsAlertListRelationFilter = {
    every?: SentNewsAlertWhereInput
    some?: SentNewsAlertWhereInput
    none?: SentNewsAlertWhereInput
  }

  export type CoachingLogListRelationFilter = {
    every?: CoachingLogWhereInput
    some?: CoachingLogWhereInput
    none?: CoachingLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SentNewsAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachingLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    subscriptionStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TelegramConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramUserId?: SortOrder
    telegramChatId?: SortOrder
    botConnectedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramUserId?: SortOrder
    telegramChatId?: SortOrder
    botConnectedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TelegramConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    telegramUserId?: SortOrder
    telegramChatId?: SortOrder
    botConnectedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTradingStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.TradingStyle | EnumTradingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.TradingStyle[] | ListEnumTradingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradingStyle[] | ListEnumTradingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumTradingStyleFilter<$PrismaModel> | $Enums.TradingStyle
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TraderProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    market?: SortOrder
    tradingStyle?: SortOrder
    experienceYears?: SortOrder
    tradingDays?: SortOrder
    tradingSession?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TraderProfileAvgOrderByAggregateInput = {
    experienceYears?: SortOrder
  }

  export type TraderProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    market?: SortOrder
    tradingStyle?: SortOrder
    experienceYears?: SortOrder
    tradingDays?: SortOrder
    tradingSession?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TraderProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    market?: SortOrder
    tradingStyle?: SortOrder
    experienceYears?: SortOrder
    tradingDays?: SortOrder
    tradingSession?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TraderProfileSumOrderByAggregateInput = {
    experienceYears?: SortOrder
  }

  export type EnumTradingStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradingStyle | EnumTradingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.TradingStyle[] | ListEnumTradingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradingStyle[] | ListEnumTradingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumTradingStyleWithAggregatesFilter<$PrismaModel> | $Enums.TradingStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradingStyleFilter<$PrismaModel>
    _max?: NestedEnumTradingStyleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RiskRulesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountSize?: SortOrder
    dailyLossLimit?: SortOrder
    riskPerTrade?: SortOrder
    maxTradesPerDay?: SortOrder
    stopAfterLosses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskRulesAvgOrderByAggregateInput = {
    accountSize?: SortOrder
    dailyLossLimit?: SortOrder
    riskPerTrade?: SortOrder
    maxTradesPerDay?: SortOrder
    stopAfterLosses?: SortOrder
  }

  export type RiskRulesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountSize?: SortOrder
    dailyLossLimit?: SortOrder
    riskPerTrade?: SortOrder
    maxTradesPerDay?: SortOrder
    stopAfterLosses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskRulesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accountSize?: SortOrder
    dailyLossLimit?: SortOrder
    riskPerTrade?: SortOrder
    maxTradesPerDay?: SortOrder
    stopAfterLosses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiskRulesSumOrderByAggregateInput = {
    accountSize?: SortOrder
    dailyLossLimit?: SortOrder
    riskPerTrade?: SortOrder
    maxTradesPerDay?: SortOrder
    stopAfterLosses?: SortOrder
  }

  export type TradingRulesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allowedSetups?: SortOrder
    forbiddenConditions?: SortOrder
    requiredBeforeEntry?: SortOrder
    invalidationRules?: SortOrder
    allowedHours?: SortOrder
    forbiddenHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradingRulesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allowedSetups?: SortOrder
    forbiddenConditions?: SortOrder
    requiredBeforeEntry?: SortOrder
    invalidationRules?: SortOrder
    allowedHours?: SortOrder
    forbiddenHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TradingRulesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    allowedSetups?: SortOrder
    forbiddenConditions?: SortOrder
    requiredBeforeEntry?: SortOrder
    invalidationRules?: SortOrder
    allowedHours?: SortOrder
    forbiddenHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCoachingToneFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingTone | EnumCoachingToneFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingTone[] | ListEnumCoachingToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingTone[] | ListEnumCoachingToneFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingToneFilter<$PrismaModel> | $Enums.CoachingTone
  }

  export type EnumResponseStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStyle | EnumResponseStyleFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStyle[] | ListEnumResponseStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStyle[] | ListEnumResponseStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStyleFilter<$PrismaModel> | $Enums.ResponseStyle
  }

  export type MentalProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mainWeaknesses?: SortOrder
    tiltTrigger?: SortOrder
    tiltThoughts?: SortOrder
    coachingTone?: SortOrder
    interruptionStyle?: SortOrder
    responseStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MentalProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mainWeaknesses?: SortOrder
    tiltTrigger?: SortOrder
    tiltThoughts?: SortOrder
    coachingTone?: SortOrder
    interruptionStyle?: SortOrder
    responseStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MentalProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mainWeaknesses?: SortOrder
    tiltTrigger?: SortOrder
    tiltThoughts?: SortOrder
    coachingTone?: SortOrder
    interruptionStyle?: SortOrder
    responseStyle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCoachingToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingTone | EnumCoachingToneFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingTone[] | ListEnumCoachingToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingTone[] | ListEnumCoachingToneFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingToneWithAggregatesFilter<$PrismaModel> | $Enums.CoachingTone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoachingToneFilter<$PrismaModel>
    _max?: NestedEnumCoachingToneFilter<$PrismaModel>
  }

  export type EnumResponseStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStyle | EnumResponseStyleFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStyle[] | ListEnumResponseStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStyle[] | ListEnumResponseStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStyleWithAggregatesFilter<$PrismaModel> | $Enums.ResponseStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseStyleFilter<$PrismaModel>
    _max?: NestedEnumResponseStyleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CoachingPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    premarketCheckinEnabled?: SortOrder
    postmarketReviewEnabled?: SortOrder
    checkinFormat?: SortOrder
    reviewFocus?: SortOrder
    newsAlertsEnabled?: SortOrder
    preNewsMinutes?: SortOrder
    highImpactOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachingPreferencesAvgOrderByAggregateInput = {
    preNewsMinutes?: SortOrder
  }

  export type CoachingPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    premarketCheckinEnabled?: SortOrder
    postmarketReviewEnabled?: SortOrder
    checkinFormat?: SortOrder
    reviewFocus?: SortOrder
    newsAlertsEnabled?: SortOrder
    preNewsMinutes?: SortOrder
    highImpactOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachingPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    premarketCheckinEnabled?: SortOrder
    postmarketReviewEnabled?: SortOrder
    checkinFormat?: SortOrder
    reviewFocus?: SortOrder
    newsAlertsEnabled?: SortOrder
    preNewsMinutes?: SortOrder
    highImpactOnly?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachingPreferencesSumOrderByAggregateInput = {
    preNewsMinutes?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NewsEventCountOrderByAggregateInput = {
    id?: SortOrder
    providerEventId?: SortOrder
    title?: SortOrder
    startsAtUtc?: SortOrder
    country?: SortOrder
    impactLevel?: SortOrder
    category?: SortOrder
    relevantMarkets?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsEventMaxOrderByAggregateInput = {
    id?: SortOrder
    providerEventId?: SortOrder
    title?: SortOrder
    startsAtUtc?: SortOrder
    country?: SortOrder
    impactLevel?: SortOrder
    category?: SortOrder
    relevantMarkets?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsEventMinOrderByAggregateInput = {
    id?: SortOrder
    providerEventId?: SortOrder
    title?: SortOrder
    startsAtUtc?: SortOrder
    country?: SortOrder
    impactLevel?: SortOrder
    category?: SortOrder
    relevantMarkets?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NewsEventScalarRelationFilter = {
    is?: NewsEventWhereInput
    isNot?: NewsEventWhereInput
  }

  export type SentNewsAlertUserIdNewsEventIdAlertTypeCompoundUniqueInput = {
    userId: string
    newsEventId: string
    alertType: $Enums.AlertType
  }

  export type SentNewsAlertCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsEventId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
  }

  export type SentNewsAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsEventId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
  }

  export type SentNewsAlertMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    newsEventId?: SortOrder
    alertType?: SortOrder
    sentAt?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type CoachingLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    triggerType?: SortOrder
    inputText?: SortOrder
    outputText?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachingLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    triggerType?: SortOrder
    inputText?: SortOrder
    outputText?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachingLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    triggerType?: SortOrder
    inputText?: SortOrder
    outputText?: SortOrder
    createdAt?: SortOrder
  }

  export type TelegramConnectionCreateNestedOneWithoutUserInput = {
    create?: XOR<TelegramConnectionCreateWithoutUserInput, TelegramConnectionUncheckedCreateWithoutUserInput>
    connectOrCreate?: TelegramConnectionCreateOrConnectWithoutUserInput
    connect?: TelegramConnectionWhereUniqueInput
  }

  export type TraderProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TraderProfileCreateWithoutUserInput, TraderProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TraderProfileCreateOrConnectWithoutUserInput
    connect?: TraderProfileWhereUniqueInput
  }

  export type RiskRulesCreateNestedOneWithoutUserInput = {
    create?: XOR<RiskRulesCreateWithoutUserInput, RiskRulesUncheckedCreateWithoutUserInput>
    connectOrCreate?: RiskRulesCreateOrConnectWithoutUserInput
    connect?: RiskRulesWhereUniqueInput
  }

  export type TradingRulesCreateNestedOneWithoutUserInput = {
    create?: XOR<TradingRulesCreateWithoutUserInput, TradingRulesUncheckedCreateWithoutUserInput>
    connectOrCreate?: TradingRulesCreateOrConnectWithoutUserInput
    connect?: TradingRulesWhereUniqueInput
  }

  export type MentalProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<MentalProfileCreateWithoutUserInput, MentalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentalProfileCreateOrConnectWithoutUserInput
    connect?: MentalProfileWhereUniqueInput
  }

  export type CoachingPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<CoachingPreferencesCreateWithoutUserInput, CoachingPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachingPreferencesCreateOrConnectWithoutUserInput
    connect?: CoachingPreferencesWhereUniqueInput
  }

  export type SentNewsAlertCreateNestedManyWithoutUserInput = {
    create?: XOR<SentNewsAlertCreateWithoutUserInput, SentNewsAlertUncheckedCreateWithoutUserInput> | SentNewsAlertCreateWithoutUserInput[] | SentNewsAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentNewsAlertCreateOrConnectWithoutUserInput | SentNewsAlertCreateOrConnectWithoutUserInput[]
    createMany?: SentNewsAlertCreateManyUserInputEnvelope
    connect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
  }

  export type CoachingLogCreateNestedManyWithoutUserInput = {
    create?: XOR<CoachingLogCreateWithoutUserInput, CoachingLogUncheckedCreateWithoutUserInput> | CoachingLogCreateWithoutUserInput[] | CoachingLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingLogCreateOrConnectWithoutUserInput | CoachingLogCreateOrConnectWithoutUserInput[]
    createMany?: CoachingLogCreateManyUserInputEnvelope
    connect?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
  }

  export type TelegramConnectionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TelegramConnectionCreateWithoutUserInput, TelegramConnectionUncheckedCreateWithoutUserInput>
    connectOrCreate?: TelegramConnectionCreateOrConnectWithoutUserInput
    connect?: TelegramConnectionWhereUniqueInput
  }

  export type TraderProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TraderProfileCreateWithoutUserInput, TraderProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TraderProfileCreateOrConnectWithoutUserInput
    connect?: TraderProfileWhereUniqueInput
  }

  export type RiskRulesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RiskRulesCreateWithoutUserInput, RiskRulesUncheckedCreateWithoutUserInput>
    connectOrCreate?: RiskRulesCreateOrConnectWithoutUserInput
    connect?: RiskRulesWhereUniqueInput
  }

  export type TradingRulesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TradingRulesCreateWithoutUserInput, TradingRulesUncheckedCreateWithoutUserInput>
    connectOrCreate?: TradingRulesCreateOrConnectWithoutUserInput
    connect?: TradingRulesWhereUniqueInput
  }

  export type MentalProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<MentalProfileCreateWithoutUserInput, MentalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentalProfileCreateOrConnectWithoutUserInput
    connect?: MentalProfileWhereUniqueInput
  }

  export type CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CoachingPreferencesCreateWithoutUserInput, CoachingPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachingPreferencesCreateOrConnectWithoutUserInput
    connect?: CoachingPreferencesWhereUniqueInput
  }

  export type SentNewsAlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SentNewsAlertCreateWithoutUserInput, SentNewsAlertUncheckedCreateWithoutUserInput> | SentNewsAlertCreateWithoutUserInput[] | SentNewsAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentNewsAlertCreateOrConnectWithoutUserInput | SentNewsAlertCreateOrConnectWithoutUserInput[]
    createMany?: SentNewsAlertCreateManyUserInputEnvelope
    connect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
  }

  export type CoachingLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoachingLogCreateWithoutUserInput, CoachingLogUncheckedCreateWithoutUserInput> | CoachingLogCreateWithoutUserInput[] | CoachingLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingLogCreateOrConnectWithoutUserInput | CoachingLogCreateOrConnectWithoutUserInput[]
    createMany?: CoachingLogCreateManyUserInputEnvelope
    connect?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TelegramConnectionUpdateOneWithoutUserNestedInput = {
    create?: XOR<TelegramConnectionCreateWithoutUserInput, TelegramConnectionUncheckedCreateWithoutUserInput>
    connectOrCreate?: TelegramConnectionCreateOrConnectWithoutUserInput
    upsert?: TelegramConnectionUpsertWithoutUserInput
    disconnect?: TelegramConnectionWhereInput | boolean
    delete?: TelegramConnectionWhereInput | boolean
    connect?: TelegramConnectionWhereUniqueInput
    update?: XOR<XOR<TelegramConnectionUpdateToOneWithWhereWithoutUserInput, TelegramConnectionUpdateWithoutUserInput>, TelegramConnectionUncheckedUpdateWithoutUserInput>
  }

  export type TraderProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TraderProfileCreateWithoutUserInput, TraderProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TraderProfileCreateOrConnectWithoutUserInput
    upsert?: TraderProfileUpsertWithoutUserInput
    disconnect?: TraderProfileWhereInput | boolean
    delete?: TraderProfileWhereInput | boolean
    connect?: TraderProfileWhereUniqueInput
    update?: XOR<XOR<TraderProfileUpdateToOneWithWhereWithoutUserInput, TraderProfileUpdateWithoutUserInput>, TraderProfileUncheckedUpdateWithoutUserInput>
  }

  export type RiskRulesUpdateOneWithoutUserNestedInput = {
    create?: XOR<RiskRulesCreateWithoutUserInput, RiskRulesUncheckedCreateWithoutUserInput>
    connectOrCreate?: RiskRulesCreateOrConnectWithoutUserInput
    upsert?: RiskRulesUpsertWithoutUserInput
    disconnect?: RiskRulesWhereInput | boolean
    delete?: RiskRulesWhereInput | boolean
    connect?: RiskRulesWhereUniqueInput
    update?: XOR<XOR<RiskRulesUpdateToOneWithWhereWithoutUserInput, RiskRulesUpdateWithoutUserInput>, RiskRulesUncheckedUpdateWithoutUserInput>
  }

  export type TradingRulesUpdateOneWithoutUserNestedInput = {
    create?: XOR<TradingRulesCreateWithoutUserInput, TradingRulesUncheckedCreateWithoutUserInput>
    connectOrCreate?: TradingRulesCreateOrConnectWithoutUserInput
    upsert?: TradingRulesUpsertWithoutUserInput
    disconnect?: TradingRulesWhereInput | boolean
    delete?: TradingRulesWhereInput | boolean
    connect?: TradingRulesWhereUniqueInput
    update?: XOR<XOR<TradingRulesUpdateToOneWithWhereWithoutUserInput, TradingRulesUpdateWithoutUserInput>, TradingRulesUncheckedUpdateWithoutUserInput>
  }

  export type MentalProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentalProfileCreateWithoutUserInput, MentalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentalProfileCreateOrConnectWithoutUserInput
    upsert?: MentalProfileUpsertWithoutUserInput
    disconnect?: MentalProfileWhereInput | boolean
    delete?: MentalProfileWhereInput | boolean
    connect?: MentalProfileWhereUniqueInput
    update?: XOR<XOR<MentalProfileUpdateToOneWithWhereWithoutUserInput, MentalProfileUpdateWithoutUserInput>, MentalProfileUncheckedUpdateWithoutUserInput>
  }

  export type CoachingPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoachingPreferencesCreateWithoutUserInput, CoachingPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachingPreferencesCreateOrConnectWithoutUserInput
    upsert?: CoachingPreferencesUpsertWithoutUserInput
    disconnect?: CoachingPreferencesWhereInput | boolean
    delete?: CoachingPreferencesWhereInput | boolean
    connect?: CoachingPreferencesWhereUniqueInput
    update?: XOR<XOR<CoachingPreferencesUpdateToOneWithWhereWithoutUserInput, CoachingPreferencesUpdateWithoutUserInput>, CoachingPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type SentNewsAlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<SentNewsAlertCreateWithoutUserInput, SentNewsAlertUncheckedCreateWithoutUserInput> | SentNewsAlertCreateWithoutUserInput[] | SentNewsAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentNewsAlertCreateOrConnectWithoutUserInput | SentNewsAlertCreateOrConnectWithoutUserInput[]
    upsert?: SentNewsAlertUpsertWithWhereUniqueWithoutUserInput | SentNewsAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SentNewsAlertCreateManyUserInputEnvelope
    set?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    disconnect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    delete?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    connect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    update?: SentNewsAlertUpdateWithWhereUniqueWithoutUserInput | SentNewsAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SentNewsAlertUpdateManyWithWhereWithoutUserInput | SentNewsAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SentNewsAlertScalarWhereInput | SentNewsAlertScalarWhereInput[]
  }

  export type CoachingLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoachingLogCreateWithoutUserInput, CoachingLogUncheckedCreateWithoutUserInput> | CoachingLogCreateWithoutUserInput[] | CoachingLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingLogCreateOrConnectWithoutUserInput | CoachingLogCreateOrConnectWithoutUserInput[]
    upsert?: CoachingLogUpsertWithWhereUniqueWithoutUserInput | CoachingLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoachingLogCreateManyUserInputEnvelope
    set?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
    disconnect?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
    delete?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
    connect?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
    update?: CoachingLogUpdateWithWhereUniqueWithoutUserInput | CoachingLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoachingLogUpdateManyWithWhereWithoutUserInput | CoachingLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoachingLogScalarWhereInput | CoachingLogScalarWhereInput[]
  }

  export type TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TelegramConnectionCreateWithoutUserInput, TelegramConnectionUncheckedCreateWithoutUserInput>
    connectOrCreate?: TelegramConnectionCreateOrConnectWithoutUserInput
    upsert?: TelegramConnectionUpsertWithoutUserInput
    disconnect?: TelegramConnectionWhereInput | boolean
    delete?: TelegramConnectionWhereInput | boolean
    connect?: TelegramConnectionWhereUniqueInput
    update?: XOR<XOR<TelegramConnectionUpdateToOneWithWhereWithoutUserInput, TelegramConnectionUpdateWithoutUserInput>, TelegramConnectionUncheckedUpdateWithoutUserInput>
  }

  export type TraderProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TraderProfileCreateWithoutUserInput, TraderProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TraderProfileCreateOrConnectWithoutUserInput
    upsert?: TraderProfileUpsertWithoutUserInput
    disconnect?: TraderProfileWhereInput | boolean
    delete?: TraderProfileWhereInput | boolean
    connect?: TraderProfileWhereUniqueInput
    update?: XOR<XOR<TraderProfileUpdateToOneWithWhereWithoutUserInput, TraderProfileUpdateWithoutUserInput>, TraderProfileUncheckedUpdateWithoutUserInput>
  }

  export type RiskRulesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RiskRulesCreateWithoutUserInput, RiskRulesUncheckedCreateWithoutUserInput>
    connectOrCreate?: RiskRulesCreateOrConnectWithoutUserInput
    upsert?: RiskRulesUpsertWithoutUserInput
    disconnect?: RiskRulesWhereInput | boolean
    delete?: RiskRulesWhereInput | boolean
    connect?: RiskRulesWhereUniqueInput
    update?: XOR<XOR<RiskRulesUpdateToOneWithWhereWithoutUserInput, RiskRulesUpdateWithoutUserInput>, RiskRulesUncheckedUpdateWithoutUserInput>
  }

  export type TradingRulesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TradingRulesCreateWithoutUserInput, TradingRulesUncheckedCreateWithoutUserInput>
    connectOrCreate?: TradingRulesCreateOrConnectWithoutUserInput
    upsert?: TradingRulesUpsertWithoutUserInput
    disconnect?: TradingRulesWhereInput | boolean
    delete?: TradingRulesWhereInput | boolean
    connect?: TradingRulesWhereUniqueInput
    update?: XOR<XOR<TradingRulesUpdateToOneWithWhereWithoutUserInput, TradingRulesUpdateWithoutUserInput>, TradingRulesUncheckedUpdateWithoutUserInput>
  }

  export type MentalProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<MentalProfileCreateWithoutUserInput, MentalProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: MentalProfileCreateOrConnectWithoutUserInput
    upsert?: MentalProfileUpsertWithoutUserInput
    disconnect?: MentalProfileWhereInput | boolean
    delete?: MentalProfileWhereInput | boolean
    connect?: MentalProfileWhereUniqueInput
    update?: XOR<XOR<MentalProfileUpdateToOneWithWhereWithoutUserInput, MentalProfileUpdateWithoutUserInput>, MentalProfileUncheckedUpdateWithoutUserInput>
  }

  export type CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CoachingPreferencesCreateWithoutUserInput, CoachingPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: CoachingPreferencesCreateOrConnectWithoutUserInput
    upsert?: CoachingPreferencesUpsertWithoutUserInput
    disconnect?: CoachingPreferencesWhereInput | boolean
    delete?: CoachingPreferencesWhereInput | boolean
    connect?: CoachingPreferencesWhereUniqueInput
    update?: XOR<XOR<CoachingPreferencesUpdateToOneWithWhereWithoutUserInput, CoachingPreferencesUpdateWithoutUserInput>, CoachingPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SentNewsAlertCreateWithoutUserInput, SentNewsAlertUncheckedCreateWithoutUserInput> | SentNewsAlertCreateWithoutUserInput[] | SentNewsAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SentNewsAlertCreateOrConnectWithoutUserInput | SentNewsAlertCreateOrConnectWithoutUserInput[]
    upsert?: SentNewsAlertUpsertWithWhereUniqueWithoutUserInput | SentNewsAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SentNewsAlertCreateManyUserInputEnvelope
    set?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    disconnect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    delete?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    connect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    update?: SentNewsAlertUpdateWithWhereUniqueWithoutUserInput | SentNewsAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SentNewsAlertUpdateManyWithWhereWithoutUserInput | SentNewsAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SentNewsAlertScalarWhereInput | SentNewsAlertScalarWhereInput[]
  }

  export type CoachingLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoachingLogCreateWithoutUserInput, CoachingLogUncheckedCreateWithoutUserInput> | CoachingLogCreateWithoutUserInput[] | CoachingLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoachingLogCreateOrConnectWithoutUserInput | CoachingLogCreateOrConnectWithoutUserInput[]
    upsert?: CoachingLogUpsertWithWhereUniqueWithoutUserInput | CoachingLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoachingLogCreateManyUserInputEnvelope
    set?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
    disconnect?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
    delete?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
    connect?: CoachingLogWhereUniqueInput | CoachingLogWhereUniqueInput[]
    update?: CoachingLogUpdateWithWhereUniqueWithoutUserInput | CoachingLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoachingLogUpdateManyWithWhereWithoutUserInput | CoachingLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoachingLogScalarWhereInput | CoachingLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTelegramConnectionInput = {
    create?: XOR<UserCreateWithoutTelegramConnectionInput, UserUncheckedCreateWithoutTelegramConnectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTelegramConnectionInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTelegramConnectionNestedInput = {
    create?: XOR<UserCreateWithoutTelegramConnectionInput, UserUncheckedCreateWithoutTelegramConnectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTelegramConnectionInput
    upsert?: UserUpsertWithoutTelegramConnectionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTelegramConnectionInput, UserUpdateWithoutTelegramConnectionInput>, UserUncheckedUpdateWithoutTelegramConnectionInput>
  }

  export type UserCreateNestedOneWithoutTraderProfileInput = {
    create?: XOR<UserCreateWithoutTraderProfileInput, UserUncheckedCreateWithoutTraderProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTraderProfileInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTradingStyleFieldUpdateOperationsInput = {
    set?: $Enums.TradingStyle
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTraderProfileNestedInput = {
    create?: XOR<UserCreateWithoutTraderProfileInput, UserUncheckedCreateWithoutTraderProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTraderProfileInput
    upsert?: UserUpsertWithoutTraderProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTraderProfileInput, UserUpdateWithoutTraderProfileInput>, UserUncheckedUpdateWithoutTraderProfileInput>
  }

  export type UserCreateNestedOneWithoutRiskRulesInput = {
    create?: XOR<UserCreateWithoutRiskRulesInput, UserUncheckedCreateWithoutRiskRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRiskRulesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRiskRulesNestedInput = {
    create?: XOR<UserCreateWithoutRiskRulesInput, UserUncheckedCreateWithoutRiskRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRiskRulesInput
    upsert?: UserUpsertWithoutRiskRulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRiskRulesInput, UserUpdateWithoutRiskRulesInput>, UserUncheckedUpdateWithoutRiskRulesInput>
  }

  export type UserCreateNestedOneWithoutTradingRulesInput = {
    create?: XOR<UserCreateWithoutTradingRulesInput, UserUncheckedCreateWithoutTradingRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradingRulesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTradingRulesNestedInput = {
    create?: XOR<UserCreateWithoutTradingRulesInput, UserUncheckedCreateWithoutTradingRulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTradingRulesInput
    upsert?: UserUpsertWithoutTradingRulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTradingRulesInput, UserUpdateWithoutTradingRulesInput>, UserUncheckedUpdateWithoutTradingRulesInput>
  }

  export type UserCreateNestedOneWithoutMentalProfileInput = {
    create?: XOR<UserCreateWithoutMentalProfileInput, UserUncheckedCreateWithoutMentalProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentalProfileInput
    connect?: UserWhereUniqueInput
  }

  export type EnumCoachingToneFieldUpdateOperationsInput = {
    set?: $Enums.CoachingTone
  }

  export type EnumResponseStyleFieldUpdateOperationsInput = {
    set?: $Enums.ResponseStyle
  }

  export type UserUpdateOneRequiredWithoutMentalProfileNestedInput = {
    create?: XOR<UserCreateWithoutMentalProfileInput, UserUncheckedCreateWithoutMentalProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentalProfileInput
    upsert?: UserUpsertWithoutMentalProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentalProfileInput, UserUpdateWithoutMentalProfileInput>, UserUncheckedUpdateWithoutMentalProfileInput>
  }

  export type UserCreateNestedOneWithoutCoachingPreferencesInput = {
    create?: XOR<UserCreateWithoutCoachingPreferencesInput, UserUncheckedCreateWithoutCoachingPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCoachingPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutCoachingPreferencesInput, UserUncheckedCreateWithoutCoachingPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingPreferencesInput
    upsert?: UserUpsertWithoutCoachingPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachingPreferencesInput, UserUpdateWithoutCoachingPreferencesInput>, UserUncheckedUpdateWithoutCoachingPreferencesInput>
  }

  export type SentNewsAlertCreateNestedManyWithoutNewsEventInput = {
    create?: XOR<SentNewsAlertCreateWithoutNewsEventInput, SentNewsAlertUncheckedCreateWithoutNewsEventInput> | SentNewsAlertCreateWithoutNewsEventInput[] | SentNewsAlertUncheckedCreateWithoutNewsEventInput[]
    connectOrCreate?: SentNewsAlertCreateOrConnectWithoutNewsEventInput | SentNewsAlertCreateOrConnectWithoutNewsEventInput[]
    createMany?: SentNewsAlertCreateManyNewsEventInputEnvelope
    connect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
  }

  export type SentNewsAlertUncheckedCreateNestedManyWithoutNewsEventInput = {
    create?: XOR<SentNewsAlertCreateWithoutNewsEventInput, SentNewsAlertUncheckedCreateWithoutNewsEventInput> | SentNewsAlertCreateWithoutNewsEventInput[] | SentNewsAlertUncheckedCreateWithoutNewsEventInput[]
    connectOrCreate?: SentNewsAlertCreateOrConnectWithoutNewsEventInput | SentNewsAlertCreateOrConnectWithoutNewsEventInput[]
    createMany?: SentNewsAlertCreateManyNewsEventInputEnvelope
    connect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
  }

  export type SentNewsAlertUpdateManyWithoutNewsEventNestedInput = {
    create?: XOR<SentNewsAlertCreateWithoutNewsEventInput, SentNewsAlertUncheckedCreateWithoutNewsEventInput> | SentNewsAlertCreateWithoutNewsEventInput[] | SentNewsAlertUncheckedCreateWithoutNewsEventInput[]
    connectOrCreate?: SentNewsAlertCreateOrConnectWithoutNewsEventInput | SentNewsAlertCreateOrConnectWithoutNewsEventInput[]
    upsert?: SentNewsAlertUpsertWithWhereUniqueWithoutNewsEventInput | SentNewsAlertUpsertWithWhereUniqueWithoutNewsEventInput[]
    createMany?: SentNewsAlertCreateManyNewsEventInputEnvelope
    set?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    disconnect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    delete?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    connect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    update?: SentNewsAlertUpdateWithWhereUniqueWithoutNewsEventInput | SentNewsAlertUpdateWithWhereUniqueWithoutNewsEventInput[]
    updateMany?: SentNewsAlertUpdateManyWithWhereWithoutNewsEventInput | SentNewsAlertUpdateManyWithWhereWithoutNewsEventInput[]
    deleteMany?: SentNewsAlertScalarWhereInput | SentNewsAlertScalarWhereInput[]
  }

  export type SentNewsAlertUncheckedUpdateManyWithoutNewsEventNestedInput = {
    create?: XOR<SentNewsAlertCreateWithoutNewsEventInput, SentNewsAlertUncheckedCreateWithoutNewsEventInput> | SentNewsAlertCreateWithoutNewsEventInput[] | SentNewsAlertUncheckedCreateWithoutNewsEventInput[]
    connectOrCreate?: SentNewsAlertCreateOrConnectWithoutNewsEventInput | SentNewsAlertCreateOrConnectWithoutNewsEventInput[]
    upsert?: SentNewsAlertUpsertWithWhereUniqueWithoutNewsEventInput | SentNewsAlertUpsertWithWhereUniqueWithoutNewsEventInput[]
    createMany?: SentNewsAlertCreateManyNewsEventInputEnvelope
    set?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    disconnect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    delete?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    connect?: SentNewsAlertWhereUniqueInput | SentNewsAlertWhereUniqueInput[]
    update?: SentNewsAlertUpdateWithWhereUniqueWithoutNewsEventInput | SentNewsAlertUpdateWithWhereUniqueWithoutNewsEventInput[]
    updateMany?: SentNewsAlertUpdateManyWithWhereWithoutNewsEventInput | SentNewsAlertUpdateManyWithWhereWithoutNewsEventInput[]
    deleteMany?: SentNewsAlertScalarWhereInput | SentNewsAlertScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentNewsAlertsInput = {
    create?: XOR<UserCreateWithoutSentNewsAlertsInput, UserUncheckedCreateWithoutSentNewsAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentNewsAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type NewsEventCreateNestedOneWithoutSentAlertsInput = {
    create?: XOR<NewsEventCreateWithoutSentAlertsInput, NewsEventUncheckedCreateWithoutSentAlertsInput>
    connectOrCreate?: NewsEventCreateOrConnectWithoutSentAlertsInput
    connect?: NewsEventWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type UserUpdateOneRequiredWithoutSentNewsAlertsNestedInput = {
    create?: XOR<UserCreateWithoutSentNewsAlertsInput, UserUncheckedCreateWithoutSentNewsAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentNewsAlertsInput
    upsert?: UserUpsertWithoutSentNewsAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentNewsAlertsInput, UserUpdateWithoutSentNewsAlertsInput>, UserUncheckedUpdateWithoutSentNewsAlertsInput>
  }

  export type NewsEventUpdateOneRequiredWithoutSentAlertsNestedInput = {
    create?: XOR<NewsEventCreateWithoutSentAlertsInput, NewsEventUncheckedCreateWithoutSentAlertsInput>
    connectOrCreate?: NewsEventCreateOrConnectWithoutSentAlertsInput
    upsert?: NewsEventUpsertWithoutSentAlertsInput
    connect?: NewsEventWhereUniqueInput
    update?: XOR<XOR<NewsEventUpdateToOneWithWhereWithoutSentAlertsInput, NewsEventUpdateWithoutSentAlertsInput>, NewsEventUncheckedUpdateWithoutSentAlertsInput>
  }

  export type UserCreateNestedOneWithoutCoachingLogsInput = {
    create?: XOR<UserCreateWithoutCoachingLogsInput, UserUncheckedCreateWithoutCoachingLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCoachingLogsNestedInput = {
    create?: XOR<UserCreateWithoutCoachingLogsInput, UserUncheckedCreateWithoutCoachingLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachingLogsInput
    upsert?: UserUpsertWithoutCoachingLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachingLogsInput, UserUpdateWithoutCoachingLogsInput>, UserUncheckedUpdateWithoutCoachingLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTradingStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.TradingStyle | EnumTradingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.TradingStyle[] | ListEnumTradingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradingStyle[] | ListEnumTradingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumTradingStyleFilter<$PrismaModel> | $Enums.TradingStyle
  }

  export type NestedEnumTradingStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TradingStyle | EnumTradingStyleFieldRefInput<$PrismaModel>
    in?: $Enums.TradingStyle[] | ListEnumTradingStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TradingStyle[] | ListEnumTradingStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumTradingStyleWithAggregatesFilter<$PrismaModel> | $Enums.TradingStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTradingStyleFilter<$PrismaModel>
    _max?: NestedEnumTradingStyleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCoachingToneFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingTone | EnumCoachingToneFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingTone[] | ListEnumCoachingToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingTone[] | ListEnumCoachingToneFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingToneFilter<$PrismaModel> | $Enums.CoachingTone
  }

  export type NestedEnumResponseStyleFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStyle | EnumResponseStyleFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStyle[] | ListEnumResponseStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStyle[] | ListEnumResponseStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStyleFilter<$PrismaModel> | $Enums.ResponseStyle
  }

  export type NestedEnumCoachingToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CoachingTone | EnumCoachingToneFieldRefInput<$PrismaModel>
    in?: $Enums.CoachingTone[] | ListEnumCoachingToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.CoachingTone[] | ListEnumCoachingToneFieldRefInput<$PrismaModel>
    not?: NestedEnumCoachingToneWithAggregatesFilter<$PrismaModel> | $Enums.CoachingTone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCoachingToneFilter<$PrismaModel>
    _max?: NestedEnumCoachingToneFilter<$PrismaModel>
  }

  export type NestedEnumResponseStyleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStyle | EnumResponseStyleFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStyle[] | ListEnumResponseStyleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStyle[] | ListEnumResponseStyleFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStyleWithAggregatesFilter<$PrismaModel> | $Enums.ResponseStyle
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseStyleFilter<$PrismaModel>
    _max?: NestedEnumResponseStyleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type TelegramConnectionCreateWithoutUserInput = {
    id?: string
    telegramUserId: string
    telegramChatId: string
    botConnectedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramConnectionUncheckedCreateWithoutUserInput = {
    id?: string
    telegramUserId: string
    telegramChatId: string
    botConnectedAt?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TelegramConnectionCreateOrConnectWithoutUserInput = {
    where: TelegramConnectionWhereUniqueInput
    create: XOR<TelegramConnectionCreateWithoutUserInput, TelegramConnectionUncheckedCreateWithoutUserInput>
  }

  export type TraderProfileCreateWithoutUserInput = {
    id?: string
    market: string
    tradingStyle: $Enums.TradingStyle
    experienceYears: number
    tradingDays: string
    tradingSession: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TraderProfileUncheckedCreateWithoutUserInput = {
    id?: string
    market: string
    tradingStyle: $Enums.TradingStyle
    experienceYears: number
    tradingDays: string
    tradingSession: string
    timezone?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TraderProfileCreateOrConnectWithoutUserInput = {
    where: TraderProfileWhereUniqueInput
    create: XOR<TraderProfileCreateWithoutUserInput, TraderProfileUncheckedCreateWithoutUserInput>
  }

  export type RiskRulesCreateWithoutUserInput = {
    id?: string
    accountSize: number
    dailyLossLimit: number
    riskPerTrade: number
    maxTradesPerDay: number
    stopAfterLosses: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskRulesUncheckedCreateWithoutUserInput = {
    id?: string
    accountSize: number
    dailyLossLimit: number
    riskPerTrade: number
    maxTradesPerDay: number
    stopAfterLosses: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiskRulesCreateOrConnectWithoutUserInput = {
    where: RiskRulesWhereUniqueInput
    create: XOR<RiskRulesCreateWithoutUserInput, RiskRulesUncheckedCreateWithoutUserInput>
  }

  export type TradingRulesCreateWithoutUserInput = {
    id?: string
    allowedSetups: string
    forbiddenConditions: string
    requiredBeforeEntry: string
    invalidationRules: string
    allowedHours: string
    forbiddenHours: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradingRulesUncheckedCreateWithoutUserInput = {
    id?: string
    allowedSetups: string
    forbiddenConditions: string
    requiredBeforeEntry: string
    invalidationRules: string
    allowedHours: string
    forbiddenHours: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TradingRulesCreateOrConnectWithoutUserInput = {
    where: TradingRulesWhereUniqueInput
    create: XOR<TradingRulesCreateWithoutUserInput, TradingRulesUncheckedCreateWithoutUserInput>
  }

  export type MentalProfileCreateWithoutUserInput = {
    id?: string
    mainWeaknesses: string
    tiltTrigger: string
    tiltThoughts: string
    coachingTone: $Enums.CoachingTone
    interruptionStyle: string
    responseStyle: $Enums.ResponseStyle
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MentalProfileUncheckedCreateWithoutUserInput = {
    id?: string
    mainWeaknesses: string
    tiltTrigger: string
    tiltThoughts: string
    coachingTone: $Enums.CoachingTone
    interruptionStyle: string
    responseStyle: $Enums.ResponseStyle
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MentalProfileCreateOrConnectWithoutUserInput = {
    where: MentalProfileWhereUniqueInput
    create: XOR<MentalProfileCreateWithoutUserInput, MentalProfileUncheckedCreateWithoutUserInput>
  }

  export type CoachingPreferencesCreateWithoutUserInput = {
    id?: string
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat: string
    reviewFocus: string
    newsAlertsEnabled?: boolean
    preNewsMinutes?: number
    highImpactOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachingPreferencesUncheckedCreateWithoutUserInput = {
    id?: string
    premarketCheckinEnabled?: boolean
    postmarketReviewEnabled?: boolean
    checkinFormat: string
    reviewFocus: string
    newsAlertsEnabled?: boolean
    preNewsMinutes?: number
    highImpactOnly?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachingPreferencesCreateOrConnectWithoutUserInput = {
    where: CoachingPreferencesWhereUniqueInput
    create: XOR<CoachingPreferencesCreateWithoutUserInput, CoachingPreferencesUncheckedCreateWithoutUserInput>
  }

  export type SentNewsAlertCreateWithoutUserInput = {
    id?: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
    newsEvent: NewsEventCreateNestedOneWithoutSentAlertsInput
  }

  export type SentNewsAlertUncheckedCreateWithoutUserInput = {
    id?: string
    newsEventId: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
  }

  export type SentNewsAlertCreateOrConnectWithoutUserInput = {
    where: SentNewsAlertWhereUniqueInput
    create: XOR<SentNewsAlertCreateWithoutUserInput, SentNewsAlertUncheckedCreateWithoutUserInput>
  }

  export type SentNewsAlertCreateManyUserInputEnvelope = {
    data: SentNewsAlertCreateManyUserInput | SentNewsAlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CoachingLogCreateWithoutUserInput = {
    id?: string
    source: string
    triggerType: string
    inputText: string
    outputText: string
    createdAt?: Date | string
  }

  export type CoachingLogUncheckedCreateWithoutUserInput = {
    id?: string
    source: string
    triggerType: string
    inputText: string
    outputText: string
    createdAt?: Date | string
  }

  export type CoachingLogCreateOrConnectWithoutUserInput = {
    where: CoachingLogWhereUniqueInput
    create: XOR<CoachingLogCreateWithoutUserInput, CoachingLogUncheckedCreateWithoutUserInput>
  }

  export type CoachingLogCreateManyUserInputEnvelope = {
    data: CoachingLogCreateManyUserInput | CoachingLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TelegramConnectionUpsertWithoutUserInput = {
    update: XOR<TelegramConnectionUpdateWithoutUserInput, TelegramConnectionUncheckedUpdateWithoutUserInput>
    create: XOR<TelegramConnectionCreateWithoutUserInput, TelegramConnectionUncheckedCreateWithoutUserInput>
    where?: TelegramConnectionWhereInput
  }

  export type TelegramConnectionUpdateToOneWithWhereWithoutUserInput = {
    where?: TelegramConnectionWhereInput
    data: XOR<TelegramConnectionUpdateWithoutUserInput, TelegramConnectionUncheckedUpdateWithoutUserInput>
  }

  export type TelegramConnectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramUserId?: StringFieldUpdateOperationsInput | string
    telegramChatId?: StringFieldUpdateOperationsInput | string
    botConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TelegramConnectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramUserId?: StringFieldUpdateOperationsInput | string
    telegramChatId?: StringFieldUpdateOperationsInput | string
    botConnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileUpsertWithoutUserInput = {
    update: XOR<TraderProfileUpdateWithoutUserInput, TraderProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TraderProfileCreateWithoutUserInput, TraderProfileUncheckedCreateWithoutUserInput>
    where?: TraderProfileWhereInput
  }

  export type TraderProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TraderProfileWhereInput
    data: XOR<TraderProfileUpdateWithoutUserInput, TraderProfileUncheckedUpdateWithoutUserInput>
  }

  export type TraderProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    tradingStyle?: EnumTradingStyleFieldUpdateOperationsInput | $Enums.TradingStyle
    experienceYears?: IntFieldUpdateOperationsInput | number
    tradingDays?: StringFieldUpdateOperationsInput | string
    tradingSession?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraderProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    market?: StringFieldUpdateOperationsInput | string
    tradingStyle?: EnumTradingStyleFieldUpdateOperationsInput | $Enums.TradingStyle
    experienceYears?: IntFieldUpdateOperationsInput | number
    tradingDays?: StringFieldUpdateOperationsInput | string
    tradingSession?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRulesUpsertWithoutUserInput = {
    update: XOR<RiskRulesUpdateWithoutUserInput, RiskRulesUncheckedUpdateWithoutUserInput>
    create: XOR<RiskRulesCreateWithoutUserInput, RiskRulesUncheckedCreateWithoutUserInput>
    where?: RiskRulesWhereInput
  }

  export type RiskRulesUpdateToOneWithWhereWithoutUserInput = {
    where?: RiskRulesWhereInput
    data: XOR<RiskRulesUpdateWithoutUserInput, RiskRulesUncheckedUpdateWithoutUserInput>
  }

  export type RiskRulesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountSize?: IntFieldUpdateOperationsInput | number
    dailyLossLimit?: IntFieldUpdateOperationsInput | number
    riskPerTrade?: IntFieldUpdateOperationsInput | number
    maxTradesPerDay?: IntFieldUpdateOperationsInput | number
    stopAfterLosses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiskRulesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountSize?: IntFieldUpdateOperationsInput | number
    dailyLossLimit?: IntFieldUpdateOperationsInput | number
    riskPerTrade?: IntFieldUpdateOperationsInput | number
    maxTradesPerDay?: IntFieldUpdateOperationsInput | number
    stopAfterLosses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingRulesUpsertWithoutUserInput = {
    update: XOR<TradingRulesUpdateWithoutUserInput, TradingRulesUncheckedUpdateWithoutUserInput>
    create: XOR<TradingRulesCreateWithoutUserInput, TradingRulesUncheckedCreateWithoutUserInput>
    where?: TradingRulesWhereInput
  }

  export type TradingRulesUpdateToOneWithWhereWithoutUserInput = {
    where?: TradingRulesWhereInput
    data: XOR<TradingRulesUpdateWithoutUserInput, TradingRulesUncheckedUpdateWithoutUserInput>
  }

  export type TradingRulesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowedSetups?: StringFieldUpdateOperationsInput | string
    forbiddenConditions?: StringFieldUpdateOperationsInput | string
    requiredBeforeEntry?: StringFieldUpdateOperationsInput | string
    invalidationRules?: StringFieldUpdateOperationsInput | string
    allowedHours?: StringFieldUpdateOperationsInput | string
    forbiddenHours?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradingRulesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    allowedSetups?: StringFieldUpdateOperationsInput | string
    forbiddenConditions?: StringFieldUpdateOperationsInput | string
    requiredBeforeEntry?: StringFieldUpdateOperationsInput | string
    invalidationRules?: StringFieldUpdateOperationsInput | string
    allowedHours?: StringFieldUpdateOperationsInput | string
    forbiddenHours?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentalProfileUpsertWithoutUserInput = {
    update: XOR<MentalProfileUpdateWithoutUserInput, MentalProfileUncheckedUpdateWithoutUserInput>
    create: XOR<MentalProfileCreateWithoutUserInput, MentalProfileUncheckedCreateWithoutUserInput>
    where?: MentalProfileWhereInput
  }

  export type MentalProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: MentalProfileWhereInput
    data: XOR<MentalProfileUpdateWithoutUserInput, MentalProfileUncheckedUpdateWithoutUserInput>
  }

  export type MentalProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainWeaknesses?: StringFieldUpdateOperationsInput | string
    tiltTrigger?: StringFieldUpdateOperationsInput | string
    tiltThoughts?: StringFieldUpdateOperationsInput | string
    coachingTone?: EnumCoachingToneFieldUpdateOperationsInput | $Enums.CoachingTone
    interruptionStyle?: StringFieldUpdateOperationsInput | string
    responseStyle?: EnumResponseStyleFieldUpdateOperationsInput | $Enums.ResponseStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentalProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainWeaknesses?: StringFieldUpdateOperationsInput | string
    tiltTrigger?: StringFieldUpdateOperationsInput | string
    tiltThoughts?: StringFieldUpdateOperationsInput | string
    coachingTone?: EnumCoachingToneFieldUpdateOperationsInput | $Enums.CoachingTone
    interruptionStyle?: StringFieldUpdateOperationsInput | string
    responseStyle?: EnumResponseStyleFieldUpdateOperationsInput | $Enums.ResponseStyle
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingPreferencesUpsertWithoutUserInput = {
    update: XOR<CoachingPreferencesUpdateWithoutUserInput, CoachingPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<CoachingPreferencesCreateWithoutUserInput, CoachingPreferencesUncheckedCreateWithoutUserInput>
    where?: CoachingPreferencesWhereInput
  }

  export type CoachingPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: CoachingPreferencesWhereInput
    data: XOR<CoachingPreferencesUpdateWithoutUserInput, CoachingPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type CoachingPreferencesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    premarketCheckinEnabled?: BoolFieldUpdateOperationsInput | boolean
    postmarketReviewEnabled?: BoolFieldUpdateOperationsInput | boolean
    checkinFormat?: StringFieldUpdateOperationsInput | string
    reviewFocus?: StringFieldUpdateOperationsInput | string
    newsAlertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    preNewsMinutes?: IntFieldUpdateOperationsInput | number
    highImpactOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingPreferencesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    premarketCheckinEnabled?: BoolFieldUpdateOperationsInput | boolean
    postmarketReviewEnabled?: BoolFieldUpdateOperationsInput | boolean
    checkinFormat?: StringFieldUpdateOperationsInput | string
    reviewFocus?: StringFieldUpdateOperationsInput | string
    newsAlertsEnabled?: BoolFieldUpdateOperationsInput | boolean
    preNewsMinutes?: IntFieldUpdateOperationsInput | number
    highImpactOnly?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentNewsAlertUpsertWithWhereUniqueWithoutUserInput = {
    where: SentNewsAlertWhereUniqueInput
    update: XOR<SentNewsAlertUpdateWithoutUserInput, SentNewsAlertUncheckedUpdateWithoutUserInput>
    create: XOR<SentNewsAlertCreateWithoutUserInput, SentNewsAlertUncheckedCreateWithoutUserInput>
  }

  export type SentNewsAlertUpdateWithWhereUniqueWithoutUserInput = {
    where: SentNewsAlertWhereUniqueInput
    data: XOR<SentNewsAlertUpdateWithoutUserInput, SentNewsAlertUncheckedUpdateWithoutUserInput>
  }

  export type SentNewsAlertUpdateManyWithWhereWithoutUserInput = {
    where: SentNewsAlertScalarWhereInput
    data: XOR<SentNewsAlertUpdateManyMutationInput, SentNewsAlertUncheckedUpdateManyWithoutUserInput>
  }

  export type SentNewsAlertScalarWhereInput = {
    AND?: SentNewsAlertScalarWhereInput | SentNewsAlertScalarWhereInput[]
    OR?: SentNewsAlertScalarWhereInput[]
    NOT?: SentNewsAlertScalarWhereInput | SentNewsAlertScalarWhereInput[]
    id?: StringFilter<"SentNewsAlert"> | string
    userId?: StringFilter<"SentNewsAlert"> | string
    newsEventId?: StringFilter<"SentNewsAlert"> | string
    alertType?: EnumAlertTypeFilter<"SentNewsAlert"> | $Enums.AlertType
    sentAt?: DateTimeFilter<"SentNewsAlert"> | Date | string
  }

  export type CoachingLogUpsertWithWhereUniqueWithoutUserInput = {
    where: CoachingLogWhereUniqueInput
    update: XOR<CoachingLogUpdateWithoutUserInput, CoachingLogUncheckedUpdateWithoutUserInput>
    create: XOR<CoachingLogCreateWithoutUserInput, CoachingLogUncheckedCreateWithoutUserInput>
  }

  export type CoachingLogUpdateWithWhereUniqueWithoutUserInput = {
    where: CoachingLogWhereUniqueInput
    data: XOR<CoachingLogUpdateWithoutUserInput, CoachingLogUncheckedUpdateWithoutUserInput>
  }

  export type CoachingLogUpdateManyWithWhereWithoutUserInput = {
    where: CoachingLogScalarWhereInput
    data: XOR<CoachingLogUpdateManyMutationInput, CoachingLogUncheckedUpdateManyWithoutUserInput>
  }

  export type CoachingLogScalarWhereInput = {
    AND?: CoachingLogScalarWhereInput | CoachingLogScalarWhereInput[]
    OR?: CoachingLogScalarWhereInput[]
    NOT?: CoachingLogScalarWhereInput | CoachingLogScalarWhereInput[]
    id?: StringFilter<"CoachingLog"> | string
    userId?: StringFilter<"CoachingLog"> | string
    source?: StringFilter<"CoachingLog"> | string
    triggerType?: StringFilter<"CoachingLog"> | string
    inputText?: StringFilter<"CoachingLog"> | string
    outputText?: StringFilter<"CoachingLog"> | string
    createdAt?: DateTimeFilter<"CoachingLog"> | Date | string
  }

  export type UserCreateWithoutTelegramConnectionInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    traderProfile?: TraderProfileCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTelegramConnectionInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    traderProfile?: TraderProfileUncheckedCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesUncheckedCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesUncheckedCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileUncheckedCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTelegramConnectionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTelegramConnectionInput, UserUncheckedCreateWithoutTelegramConnectionInput>
  }

  export type UserUpsertWithoutTelegramConnectionInput = {
    update: XOR<UserUpdateWithoutTelegramConnectionInput, UserUncheckedUpdateWithoutTelegramConnectionInput>
    create: XOR<UserCreateWithoutTelegramConnectionInput, UserUncheckedCreateWithoutTelegramConnectionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTelegramConnectionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTelegramConnectionInput, UserUncheckedUpdateWithoutTelegramConnectionInput>
  }

  export type UserUpdateWithoutTelegramConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traderProfile?: TraderProfileUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTelegramConnectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    traderProfile?: TraderProfileUncheckedUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUncheckedUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUncheckedUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUncheckedUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTraderProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTraderProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionUncheckedCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesUncheckedCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesUncheckedCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileUncheckedCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTraderProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTraderProfileInput, UserUncheckedCreateWithoutTraderProfileInput>
  }

  export type UserUpsertWithoutTraderProfileInput = {
    update: XOR<UserUpdateWithoutTraderProfileInput, UserUncheckedUpdateWithoutTraderProfileInput>
    create: XOR<UserCreateWithoutTraderProfileInput, UserUncheckedCreateWithoutTraderProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTraderProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTraderProfileInput, UserUncheckedUpdateWithoutTraderProfileInput>
  }

  export type UserUpdateWithoutTraderProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTraderProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUncheckedUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUncheckedUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUncheckedUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRiskRulesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRiskRulesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionUncheckedCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileUncheckedCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesUncheckedCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileUncheckedCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRiskRulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRiskRulesInput, UserUncheckedCreateWithoutRiskRulesInput>
  }

  export type UserUpsertWithoutRiskRulesInput = {
    update: XOR<UserUpdateWithoutRiskRulesInput, UserUncheckedUpdateWithoutRiskRulesInput>
    create: XOR<UserCreateWithoutRiskRulesInput, UserUncheckedCreateWithoutRiskRulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRiskRulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRiskRulesInput, UserUncheckedUpdateWithoutRiskRulesInput>
  }

  export type UserUpdateWithoutRiskRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRiskRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUncheckedUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUncheckedUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUncheckedUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTradingRulesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTradingRulesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionUncheckedCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileUncheckedCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesUncheckedCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileUncheckedCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTradingRulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTradingRulesInput, UserUncheckedCreateWithoutTradingRulesInput>
  }

  export type UserUpsertWithoutTradingRulesInput = {
    update: XOR<UserUpdateWithoutTradingRulesInput, UserUncheckedUpdateWithoutTradingRulesInput>
    create: XOR<UserCreateWithoutTradingRulesInput, UserUncheckedCreateWithoutTradingRulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTradingRulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTradingRulesInput, UserUncheckedUpdateWithoutTradingRulesInput>
  }

  export type UserUpdateWithoutTradingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTradingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUncheckedUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUncheckedUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUncheckedUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMentalProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMentalProfileInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionUncheckedCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileUncheckedCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesUncheckedCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesUncheckedCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMentalProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentalProfileInput, UserUncheckedCreateWithoutMentalProfileInput>
  }

  export type UserUpsertWithoutMentalProfileInput = {
    update: XOR<UserUpdateWithoutMentalProfileInput, UserUncheckedUpdateWithoutMentalProfileInput>
    create: XOR<UserCreateWithoutMentalProfileInput, UserUncheckedCreateWithoutMentalProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentalProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentalProfileInput, UserUncheckedUpdateWithoutMentalProfileInput>
  }

  export type UserUpdateWithoutMentalProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMentalProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUncheckedUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUncheckedUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUncheckedUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCoachingPreferencesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoachingPreferencesInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionUncheckedCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileUncheckedCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesUncheckedCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesUncheckedCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileUncheckedCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutUserInput
    coachingLogs?: CoachingLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoachingPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachingPreferencesInput, UserUncheckedCreateWithoutCoachingPreferencesInput>
  }

  export type UserUpsertWithoutCoachingPreferencesInput = {
    update: XOR<UserUpdateWithoutCoachingPreferencesInput, UserUncheckedUpdateWithoutCoachingPreferencesInput>
    create: XOR<UserCreateWithoutCoachingPreferencesInput, UserUncheckedCreateWithoutCoachingPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachingPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachingPreferencesInput, UserUncheckedUpdateWithoutCoachingPreferencesInput>
  }

  export type UserUpdateWithoutCoachingPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachingPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUncheckedUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUncheckedUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUncheckedUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUncheckedUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput
    coachingLogs?: CoachingLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SentNewsAlertCreateWithoutNewsEventInput = {
    id?: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
    user: UserCreateNestedOneWithoutSentNewsAlertsInput
  }

  export type SentNewsAlertUncheckedCreateWithoutNewsEventInput = {
    id?: string
    userId: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
  }

  export type SentNewsAlertCreateOrConnectWithoutNewsEventInput = {
    where: SentNewsAlertWhereUniqueInput
    create: XOR<SentNewsAlertCreateWithoutNewsEventInput, SentNewsAlertUncheckedCreateWithoutNewsEventInput>
  }

  export type SentNewsAlertCreateManyNewsEventInputEnvelope = {
    data: SentNewsAlertCreateManyNewsEventInput | SentNewsAlertCreateManyNewsEventInput[]
    skipDuplicates?: boolean
  }

  export type SentNewsAlertUpsertWithWhereUniqueWithoutNewsEventInput = {
    where: SentNewsAlertWhereUniqueInput
    update: XOR<SentNewsAlertUpdateWithoutNewsEventInput, SentNewsAlertUncheckedUpdateWithoutNewsEventInput>
    create: XOR<SentNewsAlertCreateWithoutNewsEventInput, SentNewsAlertUncheckedCreateWithoutNewsEventInput>
  }

  export type SentNewsAlertUpdateWithWhereUniqueWithoutNewsEventInput = {
    where: SentNewsAlertWhereUniqueInput
    data: XOR<SentNewsAlertUpdateWithoutNewsEventInput, SentNewsAlertUncheckedUpdateWithoutNewsEventInput>
  }

  export type SentNewsAlertUpdateManyWithWhereWithoutNewsEventInput = {
    where: SentNewsAlertScalarWhereInput
    data: XOR<SentNewsAlertUpdateManyMutationInput, SentNewsAlertUncheckedUpdateManyWithoutNewsEventInput>
  }

  export type UserCreateWithoutSentNewsAlertsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesCreateNestedOneWithoutUserInput
    coachingLogs?: CoachingLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentNewsAlertsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionUncheckedCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileUncheckedCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesUncheckedCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesUncheckedCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileUncheckedCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput
    coachingLogs?: CoachingLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentNewsAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentNewsAlertsInput, UserUncheckedCreateWithoutSentNewsAlertsInput>
  }

  export type NewsEventCreateWithoutSentAlertsInput = {
    id?: string
    providerEventId?: string | null
    title: string
    startsAtUtc: Date | string
    country?: string | null
    impactLevel: string
    category?: string | null
    relevantMarkets: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsEventUncheckedCreateWithoutSentAlertsInput = {
    id?: string
    providerEventId?: string | null
    title: string
    startsAtUtc: Date | string
    country?: string | null
    impactLevel: string
    category?: string | null
    relevantMarkets: string
    source: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsEventCreateOrConnectWithoutSentAlertsInput = {
    where: NewsEventWhereUniqueInput
    create: XOR<NewsEventCreateWithoutSentAlertsInput, NewsEventUncheckedCreateWithoutSentAlertsInput>
  }

  export type UserUpsertWithoutSentNewsAlertsInput = {
    update: XOR<UserUpdateWithoutSentNewsAlertsInput, UserUncheckedUpdateWithoutSentNewsAlertsInput>
    create: XOR<UserCreateWithoutSentNewsAlertsInput, UserUncheckedCreateWithoutSentNewsAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentNewsAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentNewsAlertsInput, UserUncheckedUpdateWithoutSentNewsAlertsInput>
  }

  export type UserUpdateWithoutSentNewsAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUpdateOneWithoutUserNestedInput
    coachingLogs?: CoachingLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentNewsAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUncheckedUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUncheckedUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUncheckedUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUncheckedUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput
    coachingLogs?: CoachingLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsEventUpsertWithoutSentAlertsInput = {
    update: XOR<NewsEventUpdateWithoutSentAlertsInput, NewsEventUncheckedUpdateWithoutSentAlertsInput>
    create: XOR<NewsEventCreateWithoutSentAlertsInput, NewsEventUncheckedCreateWithoutSentAlertsInput>
    where?: NewsEventWhereInput
  }

  export type NewsEventUpdateToOneWithWhereWithoutSentAlertsInput = {
    where?: NewsEventWhereInput
    data: XOR<NewsEventUpdateWithoutSentAlertsInput, NewsEventUncheckedUpdateWithoutSentAlertsInput>
  }

  export type NewsEventUpdateWithoutSentAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startsAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    impactLevel?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    relevantMarkets?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsEventUncheckedUpdateWithoutSentAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerEventId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    startsAtUtc?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    impactLevel?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    relevantMarkets?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutCoachingLogsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoachingLogsInput = {
    id?: string
    email: string
    passwordHash?: string | null
    role?: string
    subscriptionStatus?: $Enums.SubscriptionStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramConnection?: TelegramConnectionUncheckedCreateNestedOneWithoutUserInput
    traderProfile?: TraderProfileUncheckedCreateNestedOneWithoutUserInput
    riskRules?: RiskRulesUncheckedCreateNestedOneWithoutUserInput
    tradingRules?: TradingRulesUncheckedCreateNestedOneWithoutUserInput
    mentalProfile?: MentalProfileUncheckedCreateNestedOneWithoutUserInput
    coachingPreferences?: CoachingPreferencesUncheckedCreateNestedOneWithoutUserInput
    sentNewsAlerts?: SentNewsAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoachingLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachingLogsInput, UserUncheckedCreateWithoutCoachingLogsInput>
  }

  export type UserUpsertWithoutCoachingLogsInput = {
    update: XOR<UserUpdateWithoutCoachingLogsInput, UserUncheckedUpdateWithoutCoachingLogsInput>
    create: XOR<UserCreateWithoutCoachingLogsInput, UserUncheckedCreateWithoutCoachingLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachingLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachingLogsInput, UserUncheckedUpdateWithoutCoachingLogsInput>
  }

  export type UserUpdateWithoutCoachingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    subscriptionStatus?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramConnection?: TelegramConnectionUncheckedUpdateOneWithoutUserNestedInput
    traderProfile?: TraderProfileUncheckedUpdateOneWithoutUserNestedInput
    riskRules?: RiskRulesUncheckedUpdateOneWithoutUserNestedInput
    tradingRules?: TradingRulesUncheckedUpdateOneWithoutUserNestedInput
    mentalProfile?: MentalProfileUncheckedUpdateOneWithoutUserNestedInput
    coachingPreferences?: CoachingPreferencesUncheckedUpdateOneWithoutUserNestedInput
    sentNewsAlerts?: SentNewsAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SentNewsAlertCreateManyUserInput = {
    id?: string
    newsEventId: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
  }

  export type CoachingLogCreateManyUserInput = {
    id?: string
    source: string
    triggerType: string
    inputText: string
    outputText: string
    createdAt?: Date | string
  }

  export type SentNewsAlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsEvent?: NewsEventUpdateOneRequiredWithoutSentAlertsNestedInput
  }

  export type SentNewsAlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsEventId?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentNewsAlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    newsEventId?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    inputText?: StringFieldUpdateOperationsInput | string
    outputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    inputText?: StringFieldUpdateOperationsInput | string
    outputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachingLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    inputText?: StringFieldUpdateOperationsInput | string
    outputText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentNewsAlertCreateManyNewsEventInput = {
    id?: string
    userId: string
    alertType: $Enums.AlertType
    sentAt?: Date | string
  }

  export type SentNewsAlertUpdateWithoutNewsEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSentNewsAlertsNestedInput
  }

  export type SentNewsAlertUncheckedUpdateWithoutNewsEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SentNewsAlertUncheckedUpdateManyWithoutNewsEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}