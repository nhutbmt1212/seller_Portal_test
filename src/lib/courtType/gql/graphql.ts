/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Money` scalar type represents monetary values and supports signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Money: { input: number; output: number; }
  Time: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AddFulfillmentToOrderResult = CreateFulfillmentError | EmptyOrderLineSelectionError | Fulfillment | FulfillmentStateTransitionError | InsufficientStockOnHandError | InvalidFulfillmentHandlerError | ItemsAlreadyFulfilledError;

export type AddItemInput = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type AddItemToDraftOrderInput = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type AddManualPaymentToOrderResult = ManualPaymentStateError | Order;

export type AddNoteToCustomerInput = {
  id: Scalars['ID']['input'];
  isPublic: Scalars['Boolean']['input'];
  note: Scalars['String']['input'];
};

export type AddNoteToOrderInput = {
  id: Scalars['ID']['input'];
  isPublic: Scalars['Boolean']['input'];
  note: Scalars['String']['input'];
};

export type Address = Node & {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country: Country;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  defaultBillingAddress?: Maybe<Scalars['Boolean']['output']>;
  defaultShippingAddress?: Maybe<Scalars['Boolean']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  streetLine1: Scalars['String']['output'];
  streetLine2?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AdjustDraftOrderLineInput = {
  orderLineId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type Adjustment = {
  __typename?: 'Adjustment';
  adjustmentSource: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  type: AdjustmentType;
};

export enum AdjustmentType {
  DistributedOrderPromotion = 'DISTRIBUTED_ORDER_PROMOTION',
  Other = 'OTHER',
  Promotion = 'PROMOTION'
}

export type Administrator = Node & {
  __typename?: 'Administrator';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type AdministratorFilterParameter = {
  _and?: InputMaybe<Array<AdministratorFilterParameter>>;
  _or?: InputMaybe<Array<AdministratorFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type AdministratorList = PaginatedList & {
  __typename?: 'AdministratorList';
  items: Array<Administrator>;
  totalItems: Scalars['Int']['output'];
};

export type AdministratorListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<AdministratorFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<AdministratorSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type AdministratorPaymentInput = {
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
};

export type AdministratorRefundInput = {
  /**
   * The amount to be refunded to this particular Payment. This was introduced in
   * v2.2.0 as the preferred way to specify the refund amount. The `lines`, `shipping` and `adjustment`
   * fields will be removed in a future version.
   */
  amount?: InputMaybe<Scalars['Money']['input']>;
  paymentId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type AdministratorSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Allocation = Node & StockMovement & {
  __typename?: 'Allocation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  orderLine: OrderLine;
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned if an attempting to refund an OrderItem which has already been refunded */
export type AlreadyRefundedError = ErrorResult & {
  __typename?: 'AlreadyRefundedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  refundId: Scalars['ID']['output'];
};

export type ApplyCouponCodeResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | Order;

export type Article = Node & {
  __typename?: 'Article';
  assets?: Maybe<Array<Maybe<Asset>>>;
  body?: Maybe<Scalars['String']['output']>;
  category?: Maybe<BlogCategory>;
  createdAt: Scalars['DateTime']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  metaKeyword?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type ArticleFilterParameter = {
  _and?: InputMaybe<Array<ArticleFilterParameter>>;
  _or?: InputMaybe<Array<ArticleFilterParameter>>;
  body?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  metaKeyword?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  shortDescription?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ArticleList = PaginatedList & {
  __typename?: 'ArticleList';
  items: Array<Article>;
  totalItems: Scalars['Int']['output'];
};

export type ArticleListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ArticleFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ArticleSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleSortParameter = {
  body?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  metaKeyword?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Asset = Node & {
  __typename?: 'Asset';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  fileSize: Scalars['Int']['output'];
  focalPoint?: Maybe<Coordinate>;
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mimeType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  preview: Scalars['String']['output'];
  source: Scalars['String']['output'];
  tags: Array<Tag>;
  type: AssetType;
  updatedAt: Scalars['DateTime']['output'];
  width: Scalars['Int']['output'];
};

export type AssetFilterParameter = {
  _and?: InputMaybe<Array<AssetFilterParameter>>;
  _or?: InputMaybe<Array<AssetFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  fileSize?: InputMaybe<NumberOperators>;
  height?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  mimeType?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  preview?: InputMaybe<StringOperators>;
  source?: InputMaybe<StringOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  width?: InputMaybe<NumberOperators>;
};

export type AssetList = PaginatedList & {
  __typename?: 'AssetList';
  items: Array<Asset>;
  totalItems: Scalars['Int']['output'];
};

export type AssetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<AssetFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<AssetSortParameter>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  tagsOperator?: InputMaybe<LogicalOperator>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type AssetSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  fileSize?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  preview?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export enum AssetType {
  Binary = 'BINARY',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type AssignAssetsToChannelInput = {
  assetIds: Array<Scalars['ID']['input']>;
  channelId: Scalars['ID']['input'];
};

export type AssignCollectionsToChannelInput = {
  channelId: Scalars['ID']['input'];
  collectionIds: Array<Scalars['ID']['input']>;
};

export type AssignFacetsToChannelInput = {
  channelId: Scalars['ID']['input'];
  facetIds: Array<Scalars['ID']['input']>;
};

export type AssignPaymentMethodsToChannelInput = {
  channelId: Scalars['ID']['input'];
  paymentMethodIds: Array<Scalars['ID']['input']>;
};

export type AssignProductVariantsToChannelInput = {
  channelId: Scalars['ID']['input'];
  priceFactor?: InputMaybe<Scalars['Float']['input']>;
  productVariantIds: Array<Scalars['ID']['input']>;
};

export type AssignProductsToChannelInput = {
  channelId: Scalars['ID']['input'];
  priceFactor?: InputMaybe<Scalars['Float']['input']>;
  productIds: Array<Scalars['ID']['input']>;
};

export type AssignPromotionsToChannelInput = {
  channelId: Scalars['ID']['input'];
  promotionIds: Array<Scalars['ID']['input']>;
};

export type AssignShippingMethodsToChannelInput = {
  channelId: Scalars['ID']['input'];
  shippingMethodIds: Array<Scalars['ID']['input']>;
};

export type AssignStockLocationsToChannelInput = {
  channelId: Scalars['ID']['input'];
  stockLocationIds: Array<Scalars['ID']['input']>;
};

export type AuthenticationInput = {
  native?: InputMaybe<NativeAuthInput>;
};

export type AuthenticationMethod = Node & {
  __typename?: 'AuthenticationMethod';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  strategy: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthenticationResult = CurrentUser | InvalidCredentialsError;

export type BlogCategory = Node & {
  __typename?: 'BlogCategory';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type BlogCategoryFilterParameter = {
  _and?: InputMaybe<Array<BlogCategoryFilterParameter>>;
  _or?: InputMaybe<Array<BlogCategoryFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type BlogCategoryList = PaginatedList & {
  __typename?: 'BlogCategoryList';
  items: Array<BlogCategory>;
  totalItems: Scalars['Int']['output'];
};

export type BlogCategoryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<BlogCategoryFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<BlogCategorySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type BlogCategorySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Booking = Node & {
  __typename?: 'Booking';
  booking_date: Scalars['String']['output'];
  channels: Array<Channel>;
  code: Scalars['String']['output'];
  court?: Maybe<Court>;
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Customer>;
  end_time?: Maybe<Scalars['String']['output']>;
  hex_code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  noteAdmin?: Maybe<Scalars['String']['output']>;
  noteCustomer?: Maybe<Scalars['String']['output']>;
  productVariant?: Maybe<ProductVariant>;
  start_time?: Maybe<Scalars['String']['output']>;
  status?: Maybe<BookingStatus>;
  total_price?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type BookingFilterParameter = {
  _and?: InputMaybe<Array<BookingFilterParameter>>;
  _or?: InputMaybe<Array<BookingFilterParameter>>;
  booking_date?: InputMaybe<StringOperators>;
  code?: InputMaybe<StringOperators>;
  courtName?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  customerEmailAddress?: InputMaybe<StringOperators>;
  customerPhoneNumber?: InputMaybe<StringOperators>;
  end_time?: InputMaybe<StringOperators>;
  hex_code?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  noteAdmin?: InputMaybe<StringOperators>;
  noteCustomer?: InputMaybe<StringOperators>;
  start_time?: InputMaybe<StringOperators>;
  statusBooking?: InputMaybe<StringOperators>;
  total_price?: InputMaybe<NumberOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type BookingList = PaginatedList & {
  __typename?: 'BookingList';
  items: Array<Booking>;
  totalItems: Scalars['Int']['output'];
};

export type BookingListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<BookingFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<BookingSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingSortParameter = {
  booking_date?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  courtName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerEmailAddress?: InputMaybe<SortOrder>;
  customerPhoneNumber?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  hex_code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  noteAdmin?: InputMaybe<SortOrder>;
  noteCustomer?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  statusBooking?: InputMaybe<SortOrder>;
  total_price?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookingStatus = Node & {
  __typename?: 'BookingStatus';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BookingStatusFilterParameter = {
  _and?: InputMaybe<Array<BookingStatusFilterParameter>>;
  _or?: InputMaybe<Array<BookingStatusFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type BookingStatusList = PaginatedList & {
  __typename?: 'BookingStatusList';
  items: Array<BookingStatus>;
  totalItems: Scalars['Int']['output'];
};

export type BookingStatusListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<BookingStatusFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<BookingStatusSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type BookingStatusSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BooleanCustomFieldConfig = CustomField & {
  __typename?: 'BooleanCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Operators for filtering on a list of Boolean fields */
export type BooleanListOperators = {
  inList: Scalars['Boolean']['input'];
};

/** Operators for filtering on a Boolean field */
export type BooleanOperators = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Returned if an attempting to cancel lines from an Order which is still active */
export type CancelActiveOrderError = ErrorResult & {
  __typename?: 'CancelActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  orderState: Scalars['String']['output'];
};

export type CancelOrderInput = {
  /** Specify whether the shipping charges should also be cancelled. Defaults to false */
  cancelShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally specify which OrderLines to cancel. If not provided, all OrderLines will be cancelled */
  lines?: InputMaybe<Array<OrderLineInput>>;
  /** The id of the order to be cancelled */
  orderId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type CancelOrderResult = CancelActiveOrderError | EmptyOrderLineSelectionError | MultipleOrderError | Order | OrderStateTransitionError | QuantityTooGreatError;

/** Returned if the Payment cancellation fails */
export type CancelPaymentError = ErrorResult & {
  __typename?: 'CancelPaymentError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

export type CancelPaymentResult = CancelPaymentError | Payment | PaymentStateTransitionError;

export type Cancellation = Node & StockMovement & {
  __typename?: 'Cancellation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  orderLine: OrderLine;
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type Channel = Node & {
  __typename?: 'Channel';
  availableCurrencyCodes: Array<CurrencyCode>;
  availableLanguageCodes?: Maybe<Array<LanguageCode>>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** @deprecated Use defaultCurrencyCode instead */
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  defaultCurrencyCode: CurrencyCode;
  defaultLanguageCode: LanguageCode;
  defaultShippingZone?: Maybe<Zone>;
  defaultTaxZone?: Maybe<Zone>;
  id: Scalars['ID']['output'];
  /** Not yet used - will be implemented in a future release. */
  outOfStockThreshold?: Maybe<Scalars['Int']['output']>;
  pricesIncludeTax: Scalars['Boolean']['output'];
  seller?: Maybe<Seller>;
  token: Scalars['String']['output'];
  /** Not yet used - will be implemented in a future release. */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * Returned when the default LanguageCode of a Channel is no longer found in the `availableLanguages`
 * of the GlobalSettings
 */
export type ChannelDefaultLanguageError = ErrorResult & {
  __typename?: 'ChannelDefaultLanguageError';
  channelCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  language: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type ChannelFilterParameter = {
  _and?: InputMaybe<Array<ChannelFilterParameter>>;
  _or?: InputMaybe<Array<ChannelFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  defaultCurrencyCode?: InputMaybe<StringOperators>;
  defaultLanguageCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  outOfStockThreshold?: InputMaybe<NumberOperators>;
  pricesIncludeTax?: InputMaybe<BooleanOperators>;
  token?: InputMaybe<StringOperators>;
  trackInventory?: InputMaybe<BooleanOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ChannelList = PaginatedList & {
  __typename?: 'ChannelList';
  items: Array<Channel>;
  totalItems: Scalars['Int']['output'];
};

export type ChannelListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ChannelFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ChannelSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ChannelSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  outOfStockThreshold?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type City = Node & {
  __typename?: 'City';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayOrder?: Maybe<Scalars['Int']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  state?: Maybe<State>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type CityFilterParameter = {
  _and?: InputMaybe<Array<CityFilterParameter>>;
  _or?: InputMaybe<Array<CityFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  displayOrder?: InputMaybe<NumberOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CityList = PaginatedList & {
  __typename?: 'CityList';
  items: Array<City>;
  totalItems: Scalars['Int']['output'];
};

export type CityListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CityFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CitySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CitySortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayOrder?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Collection = Node & {
  __typename?: 'Collection';
  assets: Array<Asset>;
  breadcrumbs: Array<CollectionBreadcrumb>;
  children?: Maybe<Array<Collection>>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  featuredAsset?: Maybe<Asset>;
  filters: Array<ConfigurableOperation>;
  id: Scalars['ID']['output'];
  inheritFilters: Scalars['Boolean']['output'];
  isPrivate: Scalars['Boolean']['output'];
  languageCode?: Maybe<LanguageCode>;
  name: Scalars['String']['output'];
  parent?: Maybe<Collection>;
  parentId: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  productVariants: ProductVariantList;
  slug: Scalars['String']['output'];
  translations: Array<CollectionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};


export type CollectionProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type CollectionBreadcrumb = {
  __typename?: 'CollectionBreadcrumb';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CollectionFilterParameter = {
  _and?: InputMaybe<Array<CollectionFilterParameter>>;
  _or?: InputMaybe<Array<CollectionFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  inheritFilters?: InputMaybe<BooleanOperators>;
  isPrivate?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  position?: InputMaybe<NumberOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CollectionList = PaginatedList & {
  __typename?: 'CollectionList';
  items: Array<Collection>;
  totalItems: Scalars['Int']['output'];
};

export type CollectionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CollectionFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CollectionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
  topLevelOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Which Collections are present in the products returned
 * by the search, and in what quantity.
 */
export type CollectionResult = {
  __typename?: 'CollectionResult';
  collection: Collection;
  count: Scalars['Int']['output'];
};

export type CollectionSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CollectionTranslation = {
  __typename?: 'CollectionTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ConfigArg = {
  __typename?: 'ConfigArg';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition';
  defaultValue?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type ConfigArgInput = {
  name: Scalars['String']['input'];
  /** A JSON stringified representation of the actual value */
  value: Scalars['String']['input'];
};

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation';
  args: Array<ConfigArg>;
  code: Scalars['String']['output'];
};

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
};

export type ConfigurableOperationInput = {
  arguments: Array<ConfigArgInput>;
  code: Scalars['String']['input'];
};

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type CoordinateInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

/**
 * A Country of the world which your shop operates in.
 *
 * The `code` field is typically a 2-character ISO code such as "GB", "US", "DE" etc. This code is used in certain inputs such as
 * `UpdateAddressInput` and `CreateAddressInput` to specify the country.
 */
export type Country = Node & Region & {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CountryFilterParameter = {
  _and?: InputMaybe<Array<CountryFilterParameter>>;
  _or?: InputMaybe<Array<CountryFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CountryList = PaginatedList & {
  __typename?: 'CountryList';
  items: Array<Country>;
  totalItems: Scalars['Int']['output'];
};

export type CountryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CountryFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CountrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CountrySortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CountryTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeExpiredError = ErrorResult & {
  __typename?: 'CouponCodeExpiredError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeInvalidError = ErrorResult & {
  __typename?: 'CouponCodeInvalidError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the provided coupon code is invalid */
export type CouponCodeLimitError = ErrorResult & {
  __typename?: 'CouponCodeLimitError';
  couponCode: Scalars['String']['output'];
  errorCode: ErrorCode;
  limit: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type Court = Node & {
  __typename?: 'Court';
  assets?: Maybe<Array<Maybe<Asset>>>;
  channels: Array<Channel>;
  collection?: Maybe<Collection>;
  courtType?: Maybe<CourtType>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  end_time?: Maybe<Scalars['String']['output']>;
  featuredAsset?: Maybe<Asset>;
  hex_code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  start_time?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type CourtFilterParameter = {
  _and?: InputMaybe<Array<CourtFilterParameter>>;
  _or?: InputMaybe<Array<CourtFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  end_time?: InputMaybe<StringOperators>;
  hex_code?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  start_time?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CourtList = PaginatedList & {
  __typename?: 'CourtList';
  items: Array<Court>;
  totalItems: Scalars['Int']['output'];
};

export type CourtListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CourtFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CourtSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CourtSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  end_time?: InputMaybe<SortOrder>;
  hex_code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourtType = Node & {
  __typename?: 'CourtType';
  channels: Array<Channel>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type CourtTypeFilterParameter = {
  _and?: InputMaybe<Array<CourtTypeFilterParameter>>;
  _or?: InputMaybe<Array<CourtTypeFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CourtTypeList = PaginatedList & {
  __typename?: 'CourtTypeList';
  items: Array<CourtType>;
  totalItems: Scalars['Int']['output'];
};

export type CourtTypeListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CourtTypeFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CourtTypeSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CourtTypeSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/**
 * Input used to create an Address.
 *
 * The countryCode must correspond to a `code` property of a Country that has been defined in the
 * Vendure server. The `code` property is typically a 2-character ISO code such as "GB", "US", "DE" etc.
 * If an invalid code is passed, the mutation will fail.
 */
export type CreateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1: Scalars['String']['input'];
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleIds: Array<Scalars['ID']['input']>;
};

export type CreateArticle = {
  assets?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  body?: InputMaybe<Scalars['String']['input']>;
  category: Scalars['ID']['input'];
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  featuredAsset?: InputMaybe<Scalars['ID']['input']>;
  metaKeyword?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAssetInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  file: Scalars['Upload']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateAssetResult = Asset | MimeTypeError;

export type CreateBlogCategory = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBooking = {
  booking_date: Scalars['Date']['input'];
  court?: InputMaybe<Scalars['ID']['input']>;
  customer?: InputMaybe<Scalars['ID']['input']>;
  end_time: Scalars['String']['input'];
  hex_code?: InputMaybe<Scalars['String']['input']>;
  noteAdmin?: InputMaybe<Scalars['String']['input']>;
  noteCustomer?: InputMaybe<Scalars['String']['input']>;
  productVariant?: InputMaybe<Scalars['ID']['input']>;
  start_time: Scalars['String']['input'];
  status?: InputMaybe<Scalars['ID']['input']>;
  total_price?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateBookingStatus = {
  name: Scalars['String']['input'];
};

export type CreateChannelInput = {
  availableCurrencyCodes?: InputMaybe<Array<CurrencyCode>>;
  availableLanguageCodes?: InputMaybe<Array<LanguageCode>>;
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultCurrencyCode?: InputMaybe<CurrencyCode>;
  defaultLanguageCode: LanguageCode;
  defaultShippingZoneId: Scalars['ID']['input'];
  defaultTaxZoneId: Scalars['ID']['input'];
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  pricesIncludeTax: Scalars['Boolean']['input'];
  sellerId?: InputMaybe<Scalars['ID']['input']>;
  token: Scalars['String']['input'];
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateChannelResult = Channel | LanguageNotAvailableError;

export type CreateCity = {
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreateCollectionInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  filters: Array<ConfigurableOperationInput>;
  inheritFilters?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  translations: Array<CreateCollectionTranslationInput>;
};

export type CreateCollectionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description: Scalars['String']['input'];
  languageCode: LanguageCode;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CreateCountryInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled: Scalars['Boolean']['input'];
  translations: Array<CountryTranslationInput>;
};

export type CreateCourt = {
  assets?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collection?: InputMaybe<Scalars['ID']['input']>;
  courtType: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  end_time: Scalars['String']['input'];
  featuredAsset?: InputMaybe<Scalars['ID']['input']>;
  hex_code?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  start_time: Scalars['String']['input'];
};

export type CreateCourtType = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerGroupInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  customerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerResult = Customer | EmailAddressConflictError;

export type CreateFacetInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  isPrivate: Scalars['Boolean']['input'];
  translations: Array<FacetTranslationInput>;
  values?: InputMaybe<Array<CreateFacetValueWithFacetInput>>;
};

export type CreateFacetValueInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  facetId: Scalars['ID']['input'];
  translations: Array<FacetValueTranslationInput>;
};

export type CreateFacetValueWithFacetInput = {
  code: Scalars['String']['input'];
  translations: Array<FacetValueTranslationInput>;
};

/** Returned if an error is thrown in a FulfillmentHandler's createFulfillment method */
export type CreateFulfillmentError = ErrorResult & {
  __typename?: 'CreateFulfillmentError';
  errorCode: ErrorCode;
  fulfillmentHandlerError: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type CreateGroupOptionInput = {
  code: Scalars['String']['input'];
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreatePaymentMethodInput = {
  checker?: InputMaybe<ConfigurableOperationInput>;
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled: Scalars['Boolean']['input'];
  handler: ConfigurableOperationInput;
  translations: Array<PaymentMethodTranslationInput>;
};

export type CreatePostal = {
  areaCode?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductCustomFieldsInput = {
  day_in_week?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<CreateProductCustomFieldsInput>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  translations: Array<ProductTranslationInput>;
};

export type CreateProductOptionGroupInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  options: Array<CreateGroupOptionInput>;
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateProductOptionInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  productOptionGroupId: Scalars['ID']['input'];
  translations: Array<ProductOptionGroupTranslationInput>;
};

export type CreateProductVariantInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  optionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Money']['input']>;
  productId: Scalars['ID']['input'];
  sku: Scalars['String']['input'];
  stockLevels?: InputMaybe<Array<StockLevelInput>>;
  stockOnHand?: InputMaybe<Scalars['Int']['input']>;
  taxCategoryId?: InputMaybe<Scalars['ID']['input']>;
  trackInventory?: InputMaybe<GlobalFlag>;
  translations: Array<ProductVariantTranslationInput>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateProductVariantOptionInput = {
  code: Scalars['String']['input'];
  optionGroupId: Scalars['ID']['input'];
  translations: Array<ProductOptionTranslationInput>;
};

export type CreatePromotionInput = {
  actions: Array<ConfigurableOperationInput>;
  conditions: Array<ConfigurableOperationInput>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled: Scalars['Boolean']['input'];
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  perCustomerUsageLimit?: InputMaybe<Scalars['Int']['input']>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  translations: Array<PromotionTranslationInput>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type CreatePromotionResult = MissingConditionsError | Promotion;

export type CreateProvinceInput = {
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled: Scalars['Boolean']['input'];
  translations: Array<ProvinceTranslationInput>;
};

export type CreateRoleInput = {
  channelIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  code: Scalars['String']['input'];
  description: Scalars['String']['input'];
  permissions: Array<Permission>;
};

export type CreateSellerInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['String']['input'];
};

export type CreateShippingMethodInput = {
  calculator: ConfigurableOperationInput;
  checker: ConfigurableOperationInput;
  code: Scalars['String']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  fulfillmentHandler: Scalars['String']['input'];
  translations: Array<ShippingMethodTranslationInput>;
};

export type CreateState = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreateStockLocationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateTagInput = {
  value: Scalars['String']['input'];
};

export type CreateTaxCategoryInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type CreateTaxRateInput = {
  categoryId: Scalars['ID']['input'];
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  customerGroupId?: InputMaybe<Scalars['ID']['input']>;
  enabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  value: Scalars['Float']['input'];
  zoneId: Scalars['ID']['input'];
};

export type CreateZoneInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  memberIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byn = 'BYN',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** Swiss franc */
  Chf = 'CHF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Renminbi (Chinese) yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verde escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mru = 'MRU',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona/kronor */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Stn = 'STN',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikistani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan paʻanga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** Uruguayan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Ves = 'VES',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** CFP franc (franc Pacifique) */
  Xpf = 'XPF',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmw = 'ZMW',
  /** Zimbabwean dollar */
  Zwl = 'ZWL'
}

export type CurrentUser = {
  __typename?: 'CurrentUser';
  channels: Array<CurrentUserChannel>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
};

export type CurrentUserChannel = {
  __typename?: 'CurrentUserChannel';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Permission>;
  token: Scalars['String']['output'];
};

export type CustomField = {
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type CustomFieldConfig = BooleanCustomFieldConfig | DateTimeCustomFieldConfig | FloatCustomFieldConfig | IntCustomFieldConfig | LocaleStringCustomFieldConfig | LocaleTextCustomFieldConfig | RelationCustomFieldConfig | StringCustomFieldConfig | TextCustomFieldConfig;

/**
 * This type is deprecated in v2.2 in favor of the EntityCustomFields type,
 * which allows custom fields to be defined on user-supplies entities.
 */
export type CustomFields = {
  __typename?: 'CustomFields';
  Address: Array<CustomFieldConfig>;
  Administrator: Array<CustomFieldConfig>;
  Asset: Array<CustomFieldConfig>;
  Channel: Array<CustomFieldConfig>;
  Collection: Array<CustomFieldConfig>;
  Customer: Array<CustomFieldConfig>;
  CustomerGroup: Array<CustomFieldConfig>;
  Facet: Array<CustomFieldConfig>;
  FacetValue: Array<CustomFieldConfig>;
  Fulfillment: Array<CustomFieldConfig>;
  GlobalSettings: Array<CustomFieldConfig>;
  Order: Array<CustomFieldConfig>;
  OrderLine: Array<CustomFieldConfig>;
  PaymentMethod: Array<CustomFieldConfig>;
  Product: Array<CustomFieldConfig>;
  ProductOption: Array<CustomFieldConfig>;
  ProductOptionGroup: Array<CustomFieldConfig>;
  ProductVariant: Array<CustomFieldConfig>;
  ProductVariantPrice: Array<CustomFieldConfig>;
  Promotion: Array<CustomFieldConfig>;
  Region: Array<CustomFieldConfig>;
  Seller: Array<CustomFieldConfig>;
  ShippingMethod: Array<CustomFieldConfig>;
  StockLocation: Array<CustomFieldConfig>;
  TaxCategory: Array<CustomFieldConfig>;
  TaxRate: Array<CustomFieldConfig>;
  User: Array<CustomFieldConfig>;
  Zone: Array<CustomFieldConfig>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Address>>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  groups: Array<CustomerGroup>;
  history: HistoryEntryList;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  orders: OrderList;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};


export type CustomerHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};


export type CustomerOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};

export type CustomerFilterParameter = {
  _and?: InputMaybe<Array<CustomerFilterParameter>>;
  _or?: InputMaybe<Array<CustomerFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  emailAddress?: InputMaybe<StringOperators>;
  firstName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  lastName?: InputMaybe<StringOperators>;
  phoneNumber?: InputMaybe<StringOperators>;
  postalCode?: InputMaybe<StringOperators>;
  title?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroup = Node & {
  __typename?: 'CustomerGroup';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customers: CustomerList;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CustomerGroupCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};

export type CustomerGroupFilterParameter = {
  _and?: InputMaybe<Array<CustomerGroupFilterParameter>>;
  _or?: InputMaybe<Array<CustomerGroupFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type CustomerGroupList = PaginatedList & {
  __typename?: 'CustomerGroupList';
  items: Array<CustomerGroup>;
  totalItems: Scalars['Int']['output'];
};

export type CustomerGroupListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerGroupFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerGroupSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerGroupSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CustomerList = PaginatedList & {
  __typename?: 'CustomerList';
  items: Array<Customer>;
  totalItems: Scalars['Int']['output'];
};

export type CustomerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<CustomerFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<CustomerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  emailAddress?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Operators for filtering on a list of Date fields */
export type DateListOperators = {
  inList: Scalars['DateTime']['input'];
};

/** Operators for filtering on a DateTime field */
export type DateOperators = {
  after?: InputMaybe<Scalars['DateTime']['input']>;
  before?: InputMaybe<Scalars['DateTime']['input']>;
  between?: InputMaybe<DateRange>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateRange = {
  end: Scalars['DateTime']['input'];
  start: Scalars['DateTime']['input'];
};

/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export type DateTimeCustomFieldConfig = CustomField & {
  __typename?: 'DateTimeCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['String']['output']>;
  min?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type DeleteAssetInput = {
  assetId: Scalars['ID']['input'];
  deleteFromAllChannels?: InputMaybe<Scalars['Boolean']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeleteAssetsInput = {
  assetIds: Array<Scalars['ID']['input']>;
  deleteFromAllChannels?: InputMaybe<Scalars['Boolean']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DeleteStockLocationInput = {
  id: Scalars['ID']['input'];
  transferToLocationId?: InputMaybe<Scalars['ID']['input']>;
};

export type DeletionResponse = {
  __typename?: 'DeletionResponse';
  message?: Maybe<Scalars['String']['output']>;
  result: DeletionResult;
};

export enum DeletionResult {
  /** The entity was successfully deleted */
  Deleted = 'DELETED',
  /** Deletion did not take place, reason given in message */
  NotDeleted = 'NOT_DELETED'
}

export type Discount = {
  __typename?: 'Discount';
  adjustmentSource: Scalars['String']['output'];
  amount: Scalars['Money']['output'];
  amountWithTax: Scalars['Money']['output'];
  description: Scalars['String']['output'];
  type: AdjustmentType;
};

export type DuplicateEntityError = ErrorResult & {
  __typename?: 'DuplicateEntityError';
  duplicationError: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type DuplicateEntityInput = {
  duplicatorInput: ConfigurableOperationInput;
  entityId: Scalars['ID']['input'];
  entityName: Scalars['String']['input'];
};

export type DuplicateEntityResult = DuplicateEntityError | DuplicateEntitySuccess;

export type DuplicateEntitySuccess = {
  __typename?: 'DuplicateEntitySuccess';
  newEntityId: Scalars['ID']['output'];
};

/** Returned when attempting to create a Customer with an email address already registered to an existing User. */
export type EmailAddressConflictError = ErrorResult & {
  __typename?: 'EmailAddressConflictError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if no OrderLines have been specified for the operation */
export type EmptyOrderLineSelectionError = ErrorResult & {
  __typename?: 'EmptyOrderLineSelectionError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type EntityCustomFields = {
  __typename?: 'EntityCustomFields';
  customFields: Array<CustomFieldConfig>;
  entityName: Scalars['String']['output'];
};

export type EntityDuplicatorDefinition = {
  __typename?: 'EntityDuplicatorDefinition';
  args: Array<ConfigArgDefinition>;
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
  forEntities: Array<Scalars['String']['output']>;
  requiresPermission: Array<Permission>;
};

export enum ErrorCode {
  AlreadyRefundedError = 'ALREADY_REFUNDED_ERROR',
  CancelActiveOrderError = 'CANCEL_ACTIVE_ORDER_ERROR',
  CancelPaymentError = 'CANCEL_PAYMENT_ERROR',
  ChannelDefaultLanguageError = 'CHANNEL_DEFAULT_LANGUAGE_ERROR',
  CouponCodeExpiredError = 'COUPON_CODE_EXPIRED_ERROR',
  CouponCodeInvalidError = 'COUPON_CODE_INVALID_ERROR',
  CouponCodeLimitError = 'COUPON_CODE_LIMIT_ERROR',
  CreateFulfillmentError = 'CREATE_FULFILLMENT_ERROR',
  DuplicateEntityError = 'DUPLICATE_ENTITY_ERROR',
  EmailAddressConflictError = 'EMAIL_ADDRESS_CONFLICT_ERROR',
  EmptyOrderLineSelectionError = 'EMPTY_ORDER_LINE_SELECTION_ERROR',
  FacetInUseError = 'FACET_IN_USE_ERROR',
  FulfillmentStateTransitionError = 'FULFILLMENT_STATE_TRANSITION_ERROR',
  GuestCheckoutError = 'GUEST_CHECKOUT_ERROR',
  IneligibleShippingMethodError = 'INELIGIBLE_SHIPPING_METHOD_ERROR',
  InsufficientStockError = 'INSUFFICIENT_STOCK_ERROR',
  InsufficientStockOnHandError = 'INSUFFICIENT_STOCK_ON_HAND_ERROR',
  InvalidCredentialsError = 'INVALID_CREDENTIALS_ERROR',
  InvalidFulfillmentHandlerError = 'INVALID_FULFILLMENT_HANDLER_ERROR',
  ItemsAlreadyFulfilledError = 'ITEMS_ALREADY_FULFILLED_ERROR',
  LanguageNotAvailableError = 'LANGUAGE_NOT_AVAILABLE_ERROR',
  ManualPaymentStateError = 'MANUAL_PAYMENT_STATE_ERROR',
  MimeTypeError = 'MIME_TYPE_ERROR',
  MissingConditionsError = 'MISSING_CONDITIONS_ERROR',
  MultipleOrderError = 'MULTIPLE_ORDER_ERROR',
  NativeAuthStrategyError = 'NATIVE_AUTH_STRATEGY_ERROR',
  NegativeQuantityError = 'NEGATIVE_QUANTITY_ERROR',
  NothingToRefundError = 'NOTHING_TO_REFUND_ERROR',
  NoActiveOrderError = 'NO_ACTIVE_ORDER_ERROR',
  NoChangesSpecifiedError = 'NO_CHANGES_SPECIFIED_ERROR',
  OrderLimitError = 'ORDER_LIMIT_ERROR',
  OrderModificationError = 'ORDER_MODIFICATION_ERROR',
  OrderModificationStateError = 'ORDER_MODIFICATION_STATE_ERROR',
  OrderStateTransitionError = 'ORDER_STATE_TRANSITION_ERROR',
  PaymentMethodMissingError = 'PAYMENT_METHOD_MISSING_ERROR',
  PaymentOrderMismatchError = 'PAYMENT_ORDER_MISMATCH_ERROR',
  PaymentStateTransitionError = 'PAYMENT_STATE_TRANSITION_ERROR',
  ProductOptionInUseError = 'PRODUCT_OPTION_IN_USE_ERROR',
  QuantityTooGreatError = 'QUANTITY_TOO_GREAT_ERROR',
  RefundAmountError = 'REFUND_AMOUNT_ERROR',
  RefundOrderStateError = 'REFUND_ORDER_STATE_ERROR',
  RefundPaymentIdMissingError = 'REFUND_PAYMENT_ID_MISSING_ERROR',
  RefundStateTransitionError = 'REFUND_STATE_TRANSITION_ERROR',
  SettlePaymentError = 'SETTLE_PAYMENT_ERROR',
  UnknownError = 'UNKNOWN_ERROR'
}

export type ErrorResult = {
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Facet = Node & {
  __typename?: 'Facet';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isPrivate: Scalars['Boolean']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<FacetTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  /** Returns a paginated, sortable, filterable list of the Facet's values. Added in v2.1.0. */
  valueList: FacetValueList;
  values: Array<FacetValue>;
};


export type FacetValueListArgs = {
  options?: InputMaybe<FacetValueListOptions>;
};

export type FacetFilterParameter = {
  _and?: InputMaybe<Array<FacetFilterParameter>>;
  _or?: InputMaybe<Array<FacetFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isPrivate?: InputMaybe<BooleanOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetInUseError = ErrorResult & {
  __typename?: 'FacetInUseError';
  errorCode: ErrorCode;
  facetCode: Scalars['String']['output'];
  message: Scalars['String']['output'];
  productCount: Scalars['Int']['output'];
  variantCount: Scalars['Int']['output'];
};

export type FacetList = PaginatedList & {
  __typename?: 'FacetList';
  items: Array<Facet>;
  totalItems: Scalars['Int']['output'];
};

export type FacetListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type FacetSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetTranslation = {
  __typename?: 'FacetTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FacetValue = Node & {
  __typename?: 'FacetValue';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  facet: Facet;
  facetId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<FacetValueTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

/**
 * Used to construct boolean expressions for filtering search results
 * by FacetValue ID. Examples:
 *
 * * ID=1 OR ID=2: `{ facetValueFilters: [{ or: [1,2] }] }`
 * * ID=1 AND ID=2: `{ facetValueFilters: [{ and: 1 }, { and: 2 }] }`
 * * ID=1 AND (ID=2 OR ID=3): `{ facetValueFilters: [{ and: 1 }, { or: [2,3] }] }`
 */
export type FacetValueFilterInput = {
  and?: InputMaybe<Scalars['ID']['input']>;
  or?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type FacetValueFilterParameter = {
  _and?: InputMaybe<Array<FacetValueFilterParameter>>;
  _or?: InputMaybe<Array<FacetValueFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  facetId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type FacetValueList = PaginatedList & {
  __typename?: 'FacetValueList';
  items: Array<FacetValue>;
  totalItems: Scalars['Int']['output'];
};

export type FacetValueListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<FacetValueFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<FacetValueSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export type FacetValueResult = {
  __typename?: 'FacetValueResult';
  count: Scalars['Int']['output'];
  facetValue: FacetValue;
};

export type FacetValueSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  facetId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FacetValueTranslation = {
  __typename?: 'FacetValueTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FacetValueTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatCustomFieldConfig = CustomField & {
  __typename?: 'FloatCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  step?: Maybe<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type FulfillOrderInput = {
  handler: ConfigurableOperationInput;
  lines: Array<OrderLineInput>;
};

export type Fulfillment = Node & {
  __typename?: 'Fulfillment';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  lines: Array<FulfillmentLine>;
  method: Scalars['String']['output'];
  nextStates: Array<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  /** @deprecated Use the `lines` field instead */
  summary: Array<FulfillmentLine>;
  trackingCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type FulfillmentLine = {
  __typename?: 'FulfillmentLine';
  fulfillment: Fulfillment;
  fulfillmentId: Scalars['ID']['output'];
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
};

/** Returned when there is an error in transitioning the Fulfillment state */
export type FulfillmentStateTransitionError = ErrorResult & {
  __typename?: 'FulfillmentStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

export enum GlobalFlag {
  False = 'FALSE',
  Inherit = 'INHERIT',
  True = 'TRUE'
}

export type GlobalSettings = {
  __typename?: 'GlobalSettings';
  availableLanguages: Array<LanguageCode>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  outOfStockThreshold: Scalars['Int']['output'];
  serverConfig: ServerConfig;
  trackInventory: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned when attempting to set the Customer on a guest checkout when the configured GuestCheckoutStrategy does not allow it. */
export type GuestCheckoutError = ErrorResult & {
  __typename?: 'GuestCheckoutError';
  errorCode: ErrorCode;
  errorDetail: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type HistoryEntry = Node & {
  __typename?: 'HistoryEntry';
  administrator?: Maybe<Administrator>;
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSON']['output'];
  id: Scalars['ID']['output'];
  isPublic: Scalars['Boolean']['output'];
  type: HistoryEntryType;
  updatedAt: Scalars['DateTime']['output'];
};

export type HistoryEntryFilterParameter = {
  _and?: InputMaybe<Array<HistoryEntryFilterParameter>>;
  _or?: InputMaybe<Array<HistoryEntryFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isPublic?: InputMaybe<BooleanOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type HistoryEntryList = PaginatedList & {
  __typename?: 'HistoryEntryList';
  items: Array<HistoryEntry>;
  totalItems: Scalars['Int']['output'];
};

export type HistoryEntryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<HistoryEntryFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<HistoryEntrySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type HistoryEntrySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum HistoryEntryType {
  CustomerAddedToGroup = 'CUSTOMER_ADDED_TO_GROUP',
  CustomerAddressCreated = 'CUSTOMER_ADDRESS_CREATED',
  CustomerAddressDeleted = 'CUSTOMER_ADDRESS_DELETED',
  CustomerAddressUpdated = 'CUSTOMER_ADDRESS_UPDATED',
  CustomerDetailUpdated = 'CUSTOMER_DETAIL_UPDATED',
  CustomerEmailUpdateRequested = 'CUSTOMER_EMAIL_UPDATE_REQUESTED',
  CustomerEmailUpdateVerified = 'CUSTOMER_EMAIL_UPDATE_VERIFIED',
  CustomerNote = 'CUSTOMER_NOTE',
  CustomerPasswordResetRequested = 'CUSTOMER_PASSWORD_RESET_REQUESTED',
  CustomerPasswordResetVerified = 'CUSTOMER_PASSWORD_RESET_VERIFIED',
  CustomerPasswordUpdated = 'CUSTOMER_PASSWORD_UPDATED',
  CustomerRegistered = 'CUSTOMER_REGISTERED',
  CustomerRemovedFromGroup = 'CUSTOMER_REMOVED_FROM_GROUP',
  CustomerVerified = 'CUSTOMER_VERIFIED',
  OrderCancellation = 'ORDER_CANCELLATION',
  OrderCouponApplied = 'ORDER_COUPON_APPLIED',
  OrderCouponRemoved = 'ORDER_COUPON_REMOVED',
  OrderCustomerUpdated = 'ORDER_CUSTOMER_UPDATED',
  OrderFulfillment = 'ORDER_FULFILLMENT',
  OrderFulfillmentTransition = 'ORDER_FULFILLMENT_TRANSITION',
  OrderModified = 'ORDER_MODIFIED',
  OrderNote = 'ORDER_NOTE',
  OrderPaymentTransition = 'ORDER_PAYMENT_TRANSITION',
  OrderRefundTransition = 'ORDER_REFUND_TRANSITION',
  OrderStateTransition = 'ORDER_STATE_TRANSITION'
}

/** Operators for filtering on a list of ID fields */
export type IdListOperators = {
  inList: Scalars['ID']['input'];
};

/** Operators for filtering on an ID field */
export type IdOperators = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ImportInfo = {
  __typename?: 'ImportInfo';
  errors?: Maybe<Array<Scalars['String']['output']>>;
  imported: Scalars['Int']['output'];
  processed: Scalars['Int']['output'];
};

/** Returned when attempting to set a ShippingMethod for which the Order is not eligible */
export type IneligibleShippingMethodError = ErrorResult & {
  __typename?: 'IneligibleShippingMethodError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when attempting to add more items to the Order than are available */
export type InsufficientStockError = ErrorResult & {
  __typename?: 'InsufficientStockError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  order: Order;
  quantityAvailable: Scalars['Int']['output'];
};

/**
 * Returned if attempting to create a Fulfillment when there is insufficient
 * stockOnHand of a ProductVariant to satisfy the requested quantity.
 */
export type InsufficientStockOnHandError = ErrorResult & {
  __typename?: 'InsufficientStockOnHandError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  productVariantId: Scalars['ID']['output'];
  productVariantName: Scalars['String']['output'];
  stockOnHand: Scalars['Int']['output'];
};

export type IntCustomFieldConfig = CustomField & {
  __typename?: 'IntCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  step?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

/** Returned if the user authentication credentials are not valid */
export type InvalidCredentialsError = ErrorResult & {
  __typename?: 'InvalidCredentialsError';
  authenticationError: Scalars['String']['output'];
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the specified FulfillmentHandler code is not valid */
export type InvalidFulfillmentHandlerError = ErrorResult & {
  __typename?: 'InvalidFulfillmentHandlerError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned if the specified items are already part of a Fulfillment */
export type ItemsAlreadyFulfilledError = ErrorResult & {
  __typename?: 'ItemsAlreadyFulfilledError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Job = Node & {
  __typename?: 'Job';
  attempts: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  duration: Scalars['Int']['output'];
  error?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isSettled: Scalars['Boolean']['output'];
  progress: Scalars['Float']['output'];
  queueName: Scalars['String']['output'];
  result?: Maybe<Scalars['JSON']['output']>;
  retries: Scalars['Int']['output'];
  settledAt?: Maybe<Scalars['DateTime']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  state: JobState;
};

export type JobBufferSize = {
  __typename?: 'JobBufferSize';
  bufferId: Scalars['String']['output'];
  size: Scalars['Int']['output'];
};

export type JobFilterParameter = {
  _and?: InputMaybe<Array<JobFilterParameter>>;
  _or?: InputMaybe<Array<JobFilterParameter>>;
  attempts?: InputMaybe<NumberOperators>;
  createdAt?: InputMaybe<DateOperators>;
  duration?: InputMaybe<NumberOperators>;
  id?: InputMaybe<IdOperators>;
  isSettled?: InputMaybe<BooleanOperators>;
  progress?: InputMaybe<NumberOperators>;
  queueName?: InputMaybe<StringOperators>;
  retries?: InputMaybe<NumberOperators>;
  settledAt?: InputMaybe<DateOperators>;
  startedAt?: InputMaybe<DateOperators>;
  state?: InputMaybe<StringOperators>;
};

export type JobList = PaginatedList & {
  __typename?: 'JobList';
  items: Array<Job>;
  totalItems: Scalars['Int']['output'];
};

export type JobListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<JobFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<JobSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type JobQueue = {
  __typename?: 'JobQueue';
  name: Scalars['String']['output'];
  running: Scalars['Boolean']['output'];
};

export type JobSortParameter = {
  attempts?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  progress?: InputMaybe<SortOrder>;
  queueName?: InputMaybe<SortOrder>;
  retries?: InputMaybe<SortOrder>;
  settledAt?: InputMaybe<SortOrder>;
  startedAt?: InputMaybe<SortOrder>;
};

/**
 * @description
 * The state of a Job in the JobQueue
 *
 * @docsCategory common
 */
export enum JobState {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Retrying = 'RETRYING',
  Running = 'RUNNING'
}

/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export enum LanguageCode {
  /** Afrikaans */
  Af = 'af',
  /** Akan */
  Ak = 'ak',
  /** Amharic */
  Am = 'am',
  /** Arabic */
  Ar = 'ar',
  /** Assamese */
  As = 'as',
  /** Azerbaijani */
  Az = 'az',
  /** Belarusian */
  Be = 'be',
  /** Bulgarian */
  Bg = 'bg',
  /** Bambara */
  Bm = 'bm',
  /** Bangla */
  Bn = 'bn',
  /** Tibetan */
  Bo = 'bo',
  /** Breton */
  Br = 'br',
  /** Bosnian */
  Bs = 'bs',
  /** Catalan */
  Ca = 'ca',
  /** Chechen */
  Ce = 'ce',
  /** Corsican */
  Co = 'co',
  /** Czech */
  Cs = 'cs',
  /** Church Slavic */
  Cu = 'cu',
  /** Welsh */
  Cy = 'cy',
  /** Danish */
  Da = 'da',
  /** German */
  De = 'de',
  /** Austrian German */
  DeAt = 'de_AT',
  /** Swiss High German */
  DeCh = 'de_CH',
  /** Dzongkha */
  Dz = 'dz',
  /** Ewe */
  Ee = 'ee',
  /** Greek */
  El = 'el',
  /** English */
  En = 'en',
  /** Australian English */
  EnAu = 'en_AU',
  /** Canadian English */
  EnCa = 'en_CA',
  /** British English */
  EnGb = 'en_GB',
  /** American English */
  EnUs = 'en_US',
  /** Esperanto */
  Eo = 'eo',
  /** Spanish */
  Es = 'es',
  /** European Spanish */
  EsEs = 'es_ES',
  /** Mexican Spanish */
  EsMx = 'es_MX',
  /** Estonian */
  Et = 'et',
  /** Basque */
  Eu = 'eu',
  /** Persian */
  Fa = 'fa',
  /** Dari */
  FaAf = 'fa_AF',
  /** Fulah */
  Ff = 'ff',
  /** Finnish */
  Fi = 'fi',
  /** Faroese */
  Fo = 'fo',
  /** French */
  Fr = 'fr',
  /** Canadian French */
  FrCa = 'fr_CA',
  /** Swiss French */
  FrCh = 'fr_CH',
  /** Western Frisian */
  Fy = 'fy',
  /** Irish */
  Ga = 'ga',
  /** Scottish Gaelic */
  Gd = 'gd',
  /** Galician */
  Gl = 'gl',
  /** Gujarati */
  Gu = 'gu',
  /** Manx */
  Gv = 'gv',
  /** Hausa */
  Ha = 'ha',
  /** Hebrew */
  He = 'he',
  /** Hindi */
  Hi = 'hi',
  /** Croatian */
  Hr = 'hr',
  /** Haitian Creole */
  Ht = 'ht',
  /** Hungarian */
  Hu = 'hu',
  /** Armenian */
  Hy = 'hy',
  /** Interlingua */
  Ia = 'ia',
  /** Indonesian */
  Id = 'id',
  /** Igbo */
  Ig = 'ig',
  /** Sichuan Yi */
  Ii = 'ii',
  /** Icelandic */
  Is = 'is',
  /** Italian */
  It = 'it',
  /** Japanese */
  Ja = 'ja',
  /** Javanese */
  Jv = 'jv',
  /** Georgian */
  Ka = 'ka',
  /** Kikuyu */
  Ki = 'ki',
  /** Kazakh */
  Kk = 'kk',
  /** Kalaallisut */
  Kl = 'kl',
  /** Khmer */
  Km = 'km',
  /** Kannada */
  Kn = 'kn',
  /** Korean */
  Ko = 'ko',
  /** Kashmiri */
  Ks = 'ks',
  /** Kurdish */
  Ku = 'ku',
  /** Cornish */
  Kw = 'kw',
  /** Kyrgyz */
  Ky = 'ky',
  /** Latin */
  La = 'la',
  /** Luxembourgish */
  Lb = 'lb',
  /** Ganda */
  Lg = 'lg',
  /** Lingala */
  Ln = 'ln',
  /** Lao */
  Lo = 'lo',
  /** Lithuanian */
  Lt = 'lt',
  /** Luba-Katanga */
  Lu = 'lu',
  /** Latvian */
  Lv = 'lv',
  /** Malagasy */
  Mg = 'mg',
  /** Maori */
  Mi = 'mi',
  /** Macedonian */
  Mk = 'mk',
  /** Malayalam */
  Ml = 'ml',
  /** Mongolian */
  Mn = 'mn',
  /** Marathi */
  Mr = 'mr',
  /** Malay */
  Ms = 'ms',
  /** Maltese */
  Mt = 'mt',
  /** Burmese */
  My = 'my',
  /** Norwegian Bokmål */
  Nb = 'nb',
  /** North Ndebele */
  Nd = 'nd',
  /** Nepali */
  Ne = 'ne',
  /** Dutch */
  Nl = 'nl',
  /** Flemish */
  NlBe = 'nl_BE',
  /** Norwegian Nynorsk */
  Nn = 'nn',
  /** Nyanja */
  Ny = 'ny',
  /** Oromo */
  Om = 'om',
  /** Odia */
  Or = 'or',
  /** Ossetic */
  Os = 'os',
  /** Punjabi */
  Pa = 'pa',
  /** Polish */
  Pl = 'pl',
  /** Pashto */
  Ps = 'ps',
  /** Portuguese */
  Pt = 'pt',
  /** Brazilian Portuguese */
  PtBr = 'pt_BR',
  /** European Portuguese */
  PtPt = 'pt_PT',
  /** Quechua */
  Qu = 'qu',
  /** Romansh */
  Rm = 'rm',
  /** Rundi */
  Rn = 'rn',
  /** Romanian */
  Ro = 'ro',
  /** Moldavian */
  RoMd = 'ro_MD',
  /** Russian */
  Ru = 'ru',
  /** Kinyarwanda */
  Rw = 'rw',
  /** Sanskrit */
  Sa = 'sa',
  /** Sindhi */
  Sd = 'sd',
  /** Northern Sami */
  Se = 'se',
  /** Sango */
  Sg = 'sg',
  /** Sinhala */
  Si = 'si',
  /** Slovak */
  Sk = 'sk',
  /** Slovenian */
  Sl = 'sl',
  /** Samoan */
  Sm = 'sm',
  /** Shona */
  Sn = 'sn',
  /** Somali */
  So = 'so',
  /** Albanian */
  Sq = 'sq',
  /** Serbian */
  Sr = 'sr',
  /** Southern Sotho */
  St = 'st',
  /** Sundanese */
  Su = 'su',
  /** Swedish */
  Sv = 'sv',
  /** Swahili */
  Sw = 'sw',
  /** Congo Swahili */
  SwCd = 'sw_CD',
  /** Tamil */
  Ta = 'ta',
  /** Telugu */
  Te = 'te',
  /** Tajik */
  Tg = 'tg',
  /** Thai */
  Th = 'th',
  /** Tigrinya */
  Ti = 'ti',
  /** Turkmen */
  Tk = 'tk',
  /** Tongan */
  To = 'to',
  /** Turkish */
  Tr = 'tr',
  /** Tatar */
  Tt = 'tt',
  /** Uyghur */
  Ug = 'ug',
  /** Ukrainian */
  Uk = 'uk',
  /** Urdu */
  Ur = 'ur',
  /** Uzbek */
  Uz = 'uz',
  /** Vietnamese */
  Vi = 'vi',
  /** Volapük */
  Vo = 'vo',
  /** Wolof */
  Wo = 'wo',
  /** Xhosa */
  Xh = 'xh',
  /** Yiddish */
  Yi = 'yi',
  /** Yoruba */
  Yo = 'yo',
  /** Chinese */
  Zh = 'zh',
  /** Simplified Chinese */
  ZhHans = 'zh_Hans',
  /** Traditional Chinese */
  ZhHant = 'zh_Hant',
  /** Zulu */
  Zu = 'zu'
}

/** Returned if attempting to set a Channel's defaultLanguageCode to a language which is not enabled in GlobalSettings */
export type LanguageNotAvailableError = ErrorResult & {
  __typename?: 'LanguageNotAvailableError';
  errorCode: ErrorCode;
  languageCode: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type LocaleStringCustomFieldConfig = CustomField & {
  __typename?: 'LocaleStringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  pattern?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocaleTextCustomFieldConfig = CustomField & {
  __typename?: 'LocaleTextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type LocalizedString = {
  __typename?: 'LocalizedString';
  languageCode: LanguageCode;
  value: Scalars['String']['output'];
};

export enum LogicalOperator {
  And = 'AND',
  Or = 'OR'
}

export type ManualPaymentInput = {
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  method: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Returned when a call to addManualPaymentToOrder is made but the Order
 * is not in the required state.
 */
export type ManualPaymentStateError = ErrorResult & {
  __typename?: 'ManualPaymentStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export enum MetricInterval {
  Daily = 'Daily'
}

export type MetricSummary = {
  __typename?: 'MetricSummary';
  entries: Array<MetricSummaryEntry>;
  interval: MetricInterval;
  title: Scalars['String']['output'];
  type: MetricType;
};

export type MetricSummaryEntry = {
  __typename?: 'MetricSummaryEntry';
  label: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type MetricSummaryInput = {
  interval: MetricInterval;
  refresh?: InputMaybe<Scalars['Boolean']['input']>;
  types: Array<MetricType>;
};

export enum MetricType {
  AverageOrderValue = 'AverageOrderValue',
  OrderCount = 'OrderCount',
  OrderTotal = 'OrderTotal'
}

export type MimeTypeError = ErrorResult & {
  __typename?: 'MimeTypeError';
  errorCode: ErrorCode;
  fileName: Scalars['String']['output'];
  message: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
};

/** Returned if a PromotionCondition has neither a couponCode nor any conditions set */
export type MissingConditionsError = ErrorResult & {
  __typename?: 'MissingConditionsError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type ModifyOrderInput = {
  addItems?: InputMaybe<Array<AddItemInput>>;
  adjustOrderLines?: InputMaybe<Array<OrderLineInput>>;
  couponCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  dryRun: Scalars['Boolean']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<ModifyOrderOptions>;
  orderId: Scalars['ID']['input'];
  /**
   * Deprecated in v2.2.0. Use `refunds` instead to allow multiple refunds to be
   * applied in the case that multiple payment methods have been used on the order.
   */
  refund?: InputMaybe<AdministratorRefundInput>;
  refunds?: InputMaybe<Array<AdministratorRefundInput>>;
  /** Added in v2.2 */
  shippingMethodIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  surcharges?: InputMaybe<Array<SurchargeInput>>;
  updateBillingAddress?: InputMaybe<UpdateOrderAddressInput>;
  updateShippingAddress?: InputMaybe<UpdateOrderAddressInput>;
};

export type ModifyOrderOptions = {
  freezePromotions?: InputMaybe<Scalars['Boolean']['input']>;
  recalculateShipping?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModifyOrderResult = CouponCodeExpiredError | CouponCodeInvalidError | CouponCodeLimitError | IneligibleShippingMethodError | InsufficientStockError | NegativeQuantityError | NoChangesSpecifiedError | Order | OrderLimitError | OrderModificationStateError | PaymentMethodMissingError | RefundPaymentIdMissingError;

export type MoveCollectionInput = {
  collectionId: Scalars['ID']['input'];
  index: Scalars['Int']['input'];
  parentId: Scalars['ID']['input'];
};

/** Returned if an operation has specified OrderLines from multiple Orders */
export type MultipleOrderError = ErrorResult & {
  __typename?: 'MultipleOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addArticle?: Maybe<Article>;
  addBlogCategory?: Maybe<BlogCategory>;
  addCity?: Maybe<City>;
  /** Add Customers to a CustomerGroup */
  addCustomersToGroup: CustomerGroup;
  addFulfillmentToOrder: AddFulfillmentToOrderResult;
  /** Adds an item to the draft Order. */
  addItemToDraftOrder: UpdateOrderItemsResult;
  /**
   * Used to manually create a new Payment against an Order.
   * This can be used by an Administrator when an Order is in the ArrangingPayment state.
   *
   * It is also used when a completed Order
   * has been modified (using `modifyOrder`) and the price has increased. The extra payment
   * can then be manually arranged by the administrator, and the details used to create a new
   * Payment.
   */
  addManualPaymentToOrder: AddManualPaymentToOrderResult;
  /** Add members to a Zone */
  addMembersToZone: Zone;
  addNoteToCustomer: Customer;
  addNoteToOrder: Order;
  /** Add an OptionGroup to a Product */
  addOptionGroupToProduct: Product;
  addPostal?: Maybe<Postal>;
  addState?: Maybe<State>;
  /** Adjusts a draft OrderLine. If custom fields are defined on the OrderLine entity, a third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available. */
  adjustDraftOrderLine: UpdateOrderItemsResult;
  /** Applies the given coupon code to the draft Order */
  applyCouponCodeToDraftOrder: ApplyCouponCodeResult;
  /** Assign assets to channel */
  assignAssetsToChannel: Array<Asset>;
  /** Assigns Collections to the specified Channel */
  assignCollectionsToChannel: Array<Collection>;
  /** Assigns Facets to the specified Channel */
  assignFacetsToChannel: Array<Facet>;
  /** Assigns PaymentMethods to the specified Channel */
  assignPaymentMethodsToChannel: Array<PaymentMethod>;
  /** Assigns ProductVariants to the specified Channel */
  assignProductVariantsToChannel: Array<ProductVariant>;
  /** Assigns all ProductVariants of Product to the specified Channel */
  assignProductsToChannel: Array<Product>;
  /** Assigns Promotions to the specified Channel */
  assignPromotionsToChannel: Array<Promotion>;
  /** Assign a Role to an Administrator */
  assignRoleToAdministrator: Administrator;
  /** Assigns ShippingMethods to the specified Channel */
  assignShippingMethodsToChannel: Array<ShippingMethod>;
  /** Assigns StockLocations to the specified Channel */
  assignStockLocationsToChannel: Array<StockLocation>;
  /** Authenticates the user using a named authentication strategy */
  authenticate: AuthenticationResult;
  cancelJob: Job;
  cancelOrder: CancelOrderResult;
  cancelPayment: CancelPaymentResult;
  /** Create a new Administrator */
  createAdministrator: Administrator;
  /** Create a new Asset */
  createAssets: Array<CreateAssetResult>;
  createBooking?: Maybe<Booking>;
  createBookingStatus?: Maybe<BookingStatus>;
  /** Create a new Channel */
  createChannel: CreateChannelResult;
  /** Create a new Collection */
  createCollection: Collection;
  /** Create a new Country */
  createCountry: Country;
  createCourt?: Maybe<Court>;
  createCourtType?: Maybe<CourtType>;
  /** Create a new Customer. If a password is provided, a new User will also be created an linked to the Customer. */
  createCustomer: CreateCustomerResult;
  /** Create a new Address and associate it with the Customer specified by customerId */
  createCustomerAddress: Address;
  /** Create a new CustomerGroup */
  createCustomerGroup: CustomerGroup;
  /** Creates a draft Order */
  createDraftOrder: Order;
  /** Create a new Facet */
  createFacet: Facet;
  /** Create one or more FacetValues */
  createFacetValues: Array<FacetValue>;
  /** Create existing PaymentMethod */
  createPaymentMethod: PaymentMethod;
  /** Create a new Product */
  createProduct: Product;
  /** Create a new ProductOption within a ProductOptionGroup */
  createProductOption: ProductOption;
  /** Create a new ProductOptionGroup */
  createProductOptionGroup: ProductOptionGroup;
  /** Create a set of ProductVariants based on the OptionGroups assigned to the given Product */
  createProductVariants: Array<Maybe<ProductVariant>>;
  createPromotion: CreatePromotionResult;
  /** Create a new Province */
  createProvince: Province;
  /** Create a new Role */
  createRole: Role;
  /** Create a new Seller */
  createSeller: Seller;
  /** Create a new ShippingMethod */
  createShippingMethod: ShippingMethod;
  createStockLocation: StockLocation;
  /** Create a new Tag */
  createTag: Tag;
  /** Create a new TaxCategory */
  createTaxCategory: TaxCategory;
  /** Create a new TaxRate */
  createTaxRate: TaxRate;
  /** Create a new Zone */
  createZone: Zone;
  /** Delete an Administrator */
  deleteAdministrator: DeletionResponse;
  /** Delete multiple Administrators */
  deleteAdministrators: Array<DeletionResponse>;
  deleteArticles: Array<DeletionResponse>;
  /** Delete an Asset */
  deleteAsset: DeletionResponse;
  /** Delete multiple Assets */
  deleteAssets: DeletionResponse;
  deleteBlogCategorys: Array<DeletionResponse>;
  deleteBookingStatus: Array<DeletionResponse>;
  /** Delete a Channel */
  deleteChannel: DeletionResponse;
  /** Delete multiple Channels */
  deleteChannels: Array<DeletionResponse>;
  deleteCities: Array<DeletionResponse>;
  /** Delete a Collection and all of its descendants */
  deleteCollection: DeletionResponse;
  /** Delete multiple Collections and all of their descendants */
  deleteCollections: Array<DeletionResponse>;
  /** Delete multiple Countries */
  deleteCountries: Array<DeletionResponse>;
  /** Delete a Country */
  deleteCountry: DeletionResponse;
  deleteCourtTypes: Array<DeletionResponse>;
  deleteCourts: Array<DeletionResponse>;
  /** Delete a Customer */
  deleteCustomer: DeletionResponse;
  /** Update an existing Address */
  deleteCustomerAddress: Success;
  /** Delete a CustomerGroup */
  deleteCustomerGroup: DeletionResponse;
  /** Delete multiple CustomerGroups */
  deleteCustomerGroups: Array<DeletionResponse>;
  deleteCustomerNote: DeletionResponse;
  /** Deletes Customers */
  deleteCustomers: Array<DeletionResponse>;
  /** Deletes a draft Order */
  deleteDraftOrder: DeletionResponse;
  /** Delete an existing Facet */
  deleteFacet: DeletionResponse;
  /** Delete one or more FacetValues */
  deleteFacetValues: Array<DeletionResponse>;
  /** Delete multiple existing Facets */
  deleteFacets: Array<DeletionResponse>;
  deleteOrderNote: DeletionResponse;
  /** Delete a PaymentMethod */
  deletePaymentMethod: DeletionResponse;
  /** Delete multiple PaymentMethods */
  deletePaymentMethods: Array<DeletionResponse>;
  deletePostals: Array<DeletionResponse>;
  /** Delete a Product */
  deleteProduct: DeletionResponse;
  /** Delete a ProductOption */
  deleteProductOption: DeletionResponse;
  /** Delete a ProductVariant */
  deleteProductVariant: DeletionResponse;
  /** Delete multiple ProductVariants */
  deleteProductVariants: Array<DeletionResponse>;
  /** Delete multiple Products */
  deleteProducts: Array<DeletionResponse>;
  deletePromotion: DeletionResponse;
  deletePromotions: Array<DeletionResponse>;
  /** Delete a Province */
  deleteProvince: DeletionResponse;
  /** Delete an existing Role */
  deleteRole: DeletionResponse;
  /** Delete multiple Roles */
  deleteRoles: Array<DeletionResponse>;
  /** Delete a Seller */
  deleteSeller: DeletionResponse;
  /** Delete multiple Sellers */
  deleteSellers: Array<DeletionResponse>;
  /** Delete a ShippingMethod */
  deleteShippingMethod: DeletionResponse;
  /** Delete multiple ShippingMethods */
  deleteShippingMethods: Array<DeletionResponse>;
  deleteStates: Array<DeletionResponse>;
  deleteStockLocation: DeletionResponse;
  deleteStockLocations: Array<DeletionResponse>;
  /** Delete an existing Tag */
  deleteTag: DeletionResponse;
  /** Deletes multiple TaxCategories */
  deleteTaxCategories: Array<DeletionResponse>;
  /** Deletes a TaxCategory */
  deleteTaxCategory: DeletionResponse;
  /** Delete a TaxRate */
  deleteTaxRate: DeletionResponse;
  /** Delete multiple TaxRates */
  deleteTaxRates: Array<DeletionResponse>;
  /** Delete a Zone */
  deleteZone: DeletionResponse;
  /** Delete a Zone */
  deleteZones: Array<DeletionResponse>;
  /**
   * Duplicate an existing entity using a specific EntityDuplicator.
   * Since v2.2.0.
   */
  duplicateEntity: DuplicateEntityResult;
  flushBufferedJobs: Success;
  importProducts?: Maybe<ImportInfo>;
  /** Authenticates the user using the native authentication strategy. This mutation is an alias for `authenticate({ native: { ... }})` */
  login: NativeAuthenticationResult;
  logout: Success;
  /**
   * Allows an Order to be modified after it has been completed by the Customer. The Order must first
   * be in the `Modifying` state.
   */
  modifyOrder: ModifyOrderResult;
  /** Move a Collection to a different parent or index */
  moveCollection: Collection;
  refundOrder: RefundOrderResult;
  reindex: Job;
  /** Removes Collections from the specified Channel */
  removeCollectionsFromChannel: Array<Collection>;
  /** Removes the given coupon code from the draft Order */
  removeCouponCodeFromDraftOrder?: Maybe<Order>;
  /** Remove Customers from a CustomerGroup */
  removeCustomersFromGroup: CustomerGroup;
  /** Remove an OrderLine from the draft Order */
  removeDraftOrderLine: RemoveOrderItemsResult;
  /** Removes Facets from the specified Channel */
  removeFacetsFromChannel: Array<RemoveFacetFromChannelResult>;
  /** Remove members from a Zone */
  removeMembersFromZone: Zone;
  /**
   * Remove an OptionGroup from a Product. If the OptionGroup is in use by any ProductVariants
   * the mutation will return a ProductOptionInUseError, and the OptionGroup will not be removed.
   * Setting the `force` argument to `true` will override this and remove the OptionGroup anyway,
   * as well as removing any of the group's options from the Product's ProductVariants.
   */
  removeOptionGroupFromProduct: RemoveOptionGroupFromProductResult;
  /** Removes PaymentMethods from the specified Channel */
  removePaymentMethodsFromChannel: Array<PaymentMethod>;
  /** Removes ProductVariants from the specified Channel */
  removeProductVariantsFromChannel: Array<ProductVariant>;
  /** Removes all ProductVariants of Product from the specified Channel */
  removeProductsFromChannel: Array<Product>;
  /** Removes Promotions from the specified Channel */
  removePromotionsFromChannel: Array<Promotion>;
  /** Remove all settled jobs in the given queues older than the given date. Returns the number of jobs deleted. */
  removeSettledJobs: Scalars['Int']['output'];
  /** Removes ShippingMethods from the specified Channel */
  removeShippingMethodsFromChannel: Array<ShippingMethod>;
  /** Removes StockLocations from the specified Channel */
  removeStockLocationsFromChannel: Array<StockLocation>;
  runPendingSearchIndexUpdates: Success;
  setCustomerForDraftOrder: SetCustomerForDraftOrderResult;
  /** Sets the billing address for a draft Order */
  setDraftOrderBillingAddress: Order;
  /** Allows any custom fields to be set for the active order */
  setDraftOrderCustomFields: Order;
  /** Sets the shipping address for a draft Order */
  setDraftOrderShippingAddress: Order;
  /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethodsForDraftOrder` query */
  setDraftOrderShippingMethod: SetOrderShippingMethodResult;
  setOrderCustomFields?: Maybe<Order>;
  /** Allows a different Customer to be assigned to an Order. Added in v2.2.0. */
  setOrderCustomer?: Maybe<Order>;
  settlePayment: SettlePaymentResult;
  settleRefund: SettleRefundResult;
  transitionFulfillmentToState: TransitionFulfillmentToStateResult;
  transitionOrderToState?: Maybe<TransitionOrderToStateResult>;
  transitionPaymentToState: TransitionPaymentToStateResult;
  /** Update the active (currently logged-in) Administrator */
  updateActiveAdministrator: Administrator;
  /** Update an existing Administrator */
  updateAdministrator: Administrator;
  updateArticle?: Maybe<Article>;
  /** Update an existing Asset */
  updateAsset: Asset;
  updateBlogCategory?: Maybe<BlogCategory>;
  updateBooking?: Maybe<Booking>;
  updateBookingStatus?: Maybe<BookingStatus>;
  /** Update an existing Channel */
  updateChannel: UpdateChannelResult;
  updateCity?: Maybe<City>;
  updateCodeCities: Array<UpdateResponse>;
  updateCodePostals: Array<UpdateResponse>;
  updateCodeStates: Array<UpdateResponse>;
  /** Update an existing Collection */
  updateCollection: Collection;
  /** Update an existing Country */
  updateCountry: Country;
  updateCourt?: Maybe<Court>;
  updateCourtType?: Maybe<CourtType>;
  /** Update an existing Customer */
  updateCustomer: UpdateCustomerResult;
  /** Update an existing Address */
  updateCustomerAddress: Address;
  /** Update an existing CustomerGroup */
  updateCustomerGroup: CustomerGroup;
  updateCustomerNote: HistoryEntry;
  /** Update an existing Facet */
  updateFacet: Facet;
  /** Update one or more FacetValues */
  updateFacetValues: Array<FacetValue>;
  updateGlobalSettings: UpdateGlobalSettingsResult;
  updateOrderNote: HistoryEntry;
  /** Update an existing PaymentMethod */
  updatePaymentMethod: PaymentMethod;
  updatePostal?: Maybe<Postal>;
  /** Update an existing Product */
  updateProduct: Product;
  /** Create a new ProductOption within a ProductOptionGroup */
  updateProductOption: ProductOption;
  /** Update an existing ProductOptionGroup */
  updateProductOptionGroup: ProductOptionGroup;
  /** Update existing ProductVariants */
  updateProductVariants: Array<Maybe<ProductVariant>>;
  /** Update multiple existing Products */
  updateProducts: Array<Product>;
  updatePromotion: UpdatePromotionResult;
  /** Update an existing Province */
  updateProvince: Province;
  /** Update an existing Role */
  updateRole: Role;
  /** Update an existing Seller */
  updateSeller: Seller;
  /** Update an existing ShippingMethod */
  updateShippingMethod: ShippingMethod;
  updateState?: Maybe<State>;
  updateStockLocation: StockLocation;
  /** Update an existing Tag */
  updateTag: Tag;
  /** Update an existing TaxCategory */
  updateTaxCategory: TaxCategory;
  /** Update an existing TaxRate */
  updateTaxRate: TaxRate;
  /** Update an existing Zone */
  updateZone: Zone;
};


export type MutationAddArticleArgs = {
  input: CreateArticle;
};


export type MutationAddBlogCategoryArgs = {
  input: CreateBlogCategory;
};


export type MutationAddCityArgs = {
  input: CreateCity;
};


export type MutationAddCustomersToGroupArgs = {
  customerGroupId: Scalars['ID']['input'];
  customerIds: Array<Scalars['ID']['input']>;
};


export type MutationAddFulfillmentToOrderArgs = {
  input: FulfillOrderInput;
};


export type MutationAddItemToDraftOrderArgs = {
  input: AddItemToDraftOrderInput;
  orderId: Scalars['ID']['input'];
};


export type MutationAddManualPaymentToOrderArgs = {
  input: ManualPaymentInput;
};


export type MutationAddMembersToZoneArgs = {
  memberIds: Array<Scalars['ID']['input']>;
  zoneId: Scalars['ID']['input'];
};


export type MutationAddNoteToCustomerArgs = {
  input: AddNoteToCustomerInput;
};


export type MutationAddNoteToOrderArgs = {
  input: AddNoteToOrderInput;
};


export type MutationAddOptionGroupToProductArgs = {
  optionGroupId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationAddPostalArgs = {
  input: CreatePostal;
};


export type MutationAddStateArgs = {
  input: CreateState;
};


export type MutationAdjustDraftOrderLineArgs = {
  input: AdjustDraftOrderLineInput;
  orderId: Scalars['ID']['input'];
};


export type MutationApplyCouponCodeToDraftOrderArgs = {
  couponCode: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationAssignAssetsToChannelArgs = {
  input: AssignAssetsToChannelInput;
};


export type MutationAssignCollectionsToChannelArgs = {
  input: AssignCollectionsToChannelInput;
};


export type MutationAssignFacetsToChannelArgs = {
  input: AssignFacetsToChannelInput;
};


export type MutationAssignPaymentMethodsToChannelArgs = {
  input: AssignPaymentMethodsToChannelInput;
};


export type MutationAssignProductVariantsToChannelArgs = {
  input: AssignProductVariantsToChannelInput;
};


export type MutationAssignProductsToChannelArgs = {
  input: AssignProductsToChannelInput;
};


export type MutationAssignPromotionsToChannelArgs = {
  input: AssignPromotionsToChannelInput;
};


export type MutationAssignRoleToAdministratorArgs = {
  administratorId: Scalars['ID']['input'];
  roleId: Scalars['ID']['input'];
};


export type MutationAssignShippingMethodsToChannelArgs = {
  input: AssignShippingMethodsToChannelInput;
};


export type MutationAssignStockLocationsToChannelArgs = {
  input: AssignStockLocationsToChannelInput;
};


export type MutationAuthenticateArgs = {
  input: AuthenticationInput;
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCancelJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type MutationCancelOrderArgs = {
  input: CancelOrderInput;
};


export type MutationCancelPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateAdministratorArgs = {
  input: CreateAdministratorInput;
};


export type MutationCreateAssetsArgs = {
  input: Array<CreateAssetInput>;
};


export type MutationCreateBookingArgs = {
  input: CreateBooking;
};


export type MutationCreateBookingStatusArgs = {
  input: CreateBookingStatus;
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


export type MutationCreateCountryArgs = {
  input: CreateCountryInput;
};


export type MutationCreateCourtArgs = {
  input: CreateCourt;
};


export type MutationCreateCourtTypeArgs = {
  input: CreateCourtType;
};


export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateCustomerAddressArgs = {
  customerId: Scalars['ID']['input'];
  input: CreateAddressInput;
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};


export type MutationCreateFacetArgs = {
  input: CreateFacetInput;
};


export type MutationCreateFacetValuesArgs = {
  input: Array<CreateFacetValueInput>;
};


export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateProductOptionArgs = {
  input: CreateProductOptionInput;
};


export type MutationCreateProductOptionGroupArgs = {
  input: CreateProductOptionGroupInput;
};


export type MutationCreateProductVariantsArgs = {
  input: Array<CreateProductVariantInput>;
};


export type MutationCreatePromotionArgs = {
  input: CreatePromotionInput;
};


export type MutationCreateProvinceArgs = {
  input: CreateProvinceInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateSellerArgs = {
  input: CreateSellerInput;
};


export type MutationCreateShippingMethodArgs = {
  input: CreateShippingMethodInput;
};


export type MutationCreateStockLocationArgs = {
  input: CreateStockLocationInput;
};


export type MutationCreateTagArgs = {
  input: CreateTagInput;
};


export type MutationCreateTaxCategoryArgs = {
  input: CreateTaxCategoryInput;
};


export type MutationCreateTaxRateArgs = {
  input: CreateTaxRateInput;
};


export type MutationCreateZoneArgs = {
  input: CreateZoneInput;
};


export type MutationDeleteAdministratorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAdministratorsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteArticlesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteAssetArgs = {
  input: DeleteAssetInput;
};


export type MutationDeleteAssetsArgs = {
  input: DeleteAssetsInput;
};


export type MutationDeleteBlogCategorysArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteBookingStatusArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteChannelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteChannelsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCitiesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCollectionsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCountriesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCountryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCourtTypesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCourtsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerAddressArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomerGroupsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCustomerNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCustomersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteDraftOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationDeleteFacetArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteFacetValuesArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteFacetsArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteOrderNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentMethodArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentMethodsArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeletePostalsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductOptionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductVariantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductVariantsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteProductsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeletePromotionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePromotionsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteProvinceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRolesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteSellerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSellersArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteShippingMethodArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShippingMethodsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteStatesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteStockLocationArgs = {
  input: DeleteStockLocationInput;
};


export type MutationDeleteStockLocationsArgs = {
  input: Array<DeleteStockLocationInput>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaxCategoriesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteTaxCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaxRateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTaxRatesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteZoneArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteZonesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDuplicateEntityArgs = {
  input: DuplicateEntityInput;
};


export type MutationFlushBufferedJobsArgs = {
  bufferIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationImportProductsArgs = {
  csvFile: Scalars['Upload']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  rememberMe?: InputMaybe<Scalars['Boolean']['input']>;
  username: Scalars['String']['input'];
};


export type MutationModifyOrderArgs = {
  input: ModifyOrderInput;
};


export type MutationMoveCollectionArgs = {
  input: MoveCollectionInput;
};


export type MutationRefundOrderArgs = {
  input: RefundOrderInput;
};


export type MutationRemoveCollectionsFromChannelArgs = {
  input: RemoveCollectionsFromChannelInput;
};


export type MutationRemoveCouponCodeFromDraftOrderArgs = {
  couponCode: Scalars['String']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationRemoveCustomersFromGroupArgs = {
  customerGroupId: Scalars['ID']['input'];
  customerIds: Array<Scalars['ID']['input']>;
};


export type MutationRemoveDraftOrderLineArgs = {
  orderId: Scalars['ID']['input'];
  orderLineId: Scalars['ID']['input'];
};


export type MutationRemoveFacetsFromChannelArgs = {
  input: RemoveFacetsFromChannelInput;
};


export type MutationRemoveMembersFromZoneArgs = {
  memberIds: Array<Scalars['ID']['input']>;
  zoneId: Scalars['ID']['input'];
};


export type MutationRemoveOptionGroupFromProductArgs = {
  force?: InputMaybe<Scalars['Boolean']['input']>;
  optionGroupId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationRemovePaymentMethodsFromChannelArgs = {
  input: RemovePaymentMethodsFromChannelInput;
};


export type MutationRemoveProductVariantsFromChannelArgs = {
  input: RemoveProductVariantsFromChannelInput;
};


export type MutationRemoveProductsFromChannelArgs = {
  input: RemoveProductsFromChannelInput;
};


export type MutationRemovePromotionsFromChannelArgs = {
  input: RemovePromotionsFromChannelInput;
};


export type MutationRemoveSettledJobsArgs = {
  olderThan?: InputMaybe<Scalars['DateTime']['input']>;
  queueNames?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationRemoveShippingMethodsFromChannelArgs = {
  input: RemoveShippingMethodsFromChannelInput;
};


export type MutationRemoveStockLocationsFromChannelArgs = {
  input: RemoveStockLocationsFromChannelInput;
};


export type MutationSetCustomerForDraftOrderArgs = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<CreateCustomerInput>;
  orderId: Scalars['ID']['input'];
};


export type MutationSetDraftOrderBillingAddressArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID']['input'];
};


export type MutationSetDraftOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
  orderId: Scalars['ID']['input'];
};


export type MutationSetDraftOrderShippingAddressArgs = {
  input: CreateAddressInput;
  orderId: Scalars['ID']['input'];
};


export type MutationSetDraftOrderShippingMethodArgs = {
  orderId: Scalars['ID']['input'];
  shippingMethodId: Scalars['ID']['input'];
};


export type MutationSetOrderCustomFieldsArgs = {
  input: UpdateOrderInput;
};


export type MutationSetOrderCustomerArgs = {
  input: SetOrderCustomerInput;
};


export type MutationSettlePaymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSettleRefundArgs = {
  input: SettleRefundInput;
};


export type MutationTransitionFulfillmentToStateArgs = {
  id: Scalars['ID']['input'];
  state: Scalars['String']['input'];
};


export type MutationTransitionOrderToStateArgs = {
  id: Scalars['ID']['input'];
  state: Scalars['String']['input'];
};


export type MutationTransitionPaymentToStateArgs = {
  id: Scalars['ID']['input'];
  state: Scalars['String']['input'];
};


export type MutationUpdateActiveAdministratorArgs = {
  input: UpdateActiveAdministratorInput;
};


export type MutationUpdateAdministratorArgs = {
  input: UpdateAdministratorInput;
};


export type MutationUpdateArticleArgs = {
  input: UpdateArticle;
};


export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};


export type MutationUpdateBlogCategoryArgs = {
  input: UpdateBlogCategory;
};


export type MutationUpdateBookingArgs = {
  input: UpdateBooking;
};


export type MutationUpdateBookingStatusArgs = {
  input: UpdateBookingStatus;
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationUpdateCityArgs = {
  input: UpdateCity;
};


export type MutationUpdateCodeCitiesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationUpdateCodePostalsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationUpdateCodeStatesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput;
};


export type MutationUpdateCourtArgs = {
  input: UpdateCourt;
};


export type MutationUpdateCourtTypeArgs = {
  input: UpdateCourtType;
};


export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type MutationUpdateCustomerAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput;
};


export type MutationUpdateCustomerNoteArgs = {
  input: UpdateCustomerNoteInput;
};


export type MutationUpdateFacetArgs = {
  input: UpdateFacetInput;
};


export type MutationUpdateFacetValuesArgs = {
  input: Array<UpdateFacetValueInput>;
};


export type MutationUpdateGlobalSettingsArgs = {
  input: UpdateGlobalSettingsInput;
};


export type MutationUpdateOrderNoteArgs = {
  input: UpdateOrderNoteInput;
};


export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput;
};


export type MutationUpdatePostalArgs = {
  input: UpdatePostal;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateProductOptionArgs = {
  input: UpdateProductOptionInput;
};


export type MutationUpdateProductOptionGroupArgs = {
  input: UpdateProductOptionGroupInput;
};


export type MutationUpdateProductVariantsArgs = {
  input: Array<UpdateProductVariantInput>;
};


export type MutationUpdateProductsArgs = {
  input: Array<UpdateProductInput>;
};


export type MutationUpdatePromotionArgs = {
  input: UpdatePromotionInput;
};


export type MutationUpdateProvinceArgs = {
  input: UpdateProvinceInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateSellerArgs = {
  input: UpdateSellerInput;
};


export type MutationUpdateShippingMethodArgs = {
  input: UpdateShippingMethodInput;
};


export type MutationUpdateStateArgs = {
  input: UpdateState;
};


export type MutationUpdateStockLocationArgs = {
  input: UpdateStockLocationInput;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationUpdateTaxCategoryArgs = {
  input: UpdateTaxCategoryInput;
};


export type MutationUpdateTaxRateArgs = {
  input: UpdateTaxRateInput;
};


export type MutationUpdateZoneArgs = {
  input: UpdateZoneInput;
};

export type NativeAuthInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** Returned when attempting an operation that relies on the NativeAuthStrategy, if that strategy is not configured. */
export type NativeAuthStrategyError = ErrorResult & {
  __typename?: 'NativeAuthStrategyError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type NativeAuthenticationResult = CurrentUser | InvalidCredentialsError | NativeAuthStrategyError;

/** Returned when attempting to set a negative OrderLine quantity. */
export type NegativeQuantityError = ErrorResult & {
  __typename?: 'NegativeQuantityError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/**
 * Returned when invoking a mutation which depends on there being an active Order on the
 * current session.
 */
export type NoActiveOrderError = ErrorResult & {
  __typename?: 'NoActiveOrderError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when a call to modifyOrder fails to specify any changes */
export type NoChangesSpecifiedError = ErrorResult & {
  __typename?: 'NoChangesSpecifiedError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

/** Returned if an attempting to refund an Order but neither items nor shipping refund was specified */
export type NothingToRefundError = ErrorResult & {
  __typename?: 'NothingToRefundError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Operators for filtering on a list of Number fields */
export type NumberListOperators = {
  inList: Scalars['Float']['input'];
};

/** Operators for filtering on a Int or Float field */
export type NumberOperators = {
  between?: InputMaybe<NumberRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type NumberRange = {
  end: Scalars['Float']['input'];
  start: Scalars['Float']['input'];
};

export type Order = Node & {
  __typename?: 'Order';
  /** An order is active as long as the payment process has not been completed */
  active: Scalars['Boolean']['output'];
  aggregateOrder?: Maybe<Order>;
  aggregateOrderId?: Maybe<Scalars['ID']['output']>;
  billingAddress?: Maybe<OrderAddress>;
  channels: Array<Channel>;
  /** A unique code for the Order */
  code: Scalars['String']['output'];
  /** An array of all coupon codes applied to the Order */
  couponCodes: Array<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  customer?: Maybe<Customer>;
  discounts: Array<Discount>;
  fulfillments?: Maybe<Array<Fulfillment>>;
  history: HistoryEntryList;
  id: Scalars['ID']['output'];
  lines: Array<OrderLine>;
  modifications: Array<OrderModification>;
  nextStates: Array<Scalars['String']['output']>;
  /**
   * The date & time that the Order was placed, i.e. the Customer
   * completed the checkout and the Order is no longer "active"
   */
  orderPlacedAt?: Maybe<Scalars['DateTime']['output']>;
  payments?: Maybe<Array<Payment>>;
  /** Promotions applied to the order. Only gets populated after the payment process has completed. */
  promotions: Array<Promotion>;
  sellerOrders?: Maybe<Array<Order>>;
  shipping: Scalars['Money']['output'];
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines: Array<ShippingLine>;
  shippingWithTax: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  /**
   * The subTotal is the total of all OrderLines in the Order. This figure also includes any Order-level
   * discounts which have been prorated (proportionally distributed) amongst the items of each OrderLine.
   * To get a total of all OrderLines which does not account for prorated discounts, use the
   * sum of `OrderLine.discountedLinePrice` values.
   */
  subTotal: Scalars['Money']['output'];
  /** Same as subTotal, but inclusive of tax */
  subTotalWithTax: Scalars['Money']['output'];
  /**
   * Surcharges are arbitrary modifications to the Order total which are neither
   * ProductVariants nor discounts resulting from applied Promotions. For example,
   * one-off discounts based on customer interaction, or surcharges based on payment
   * methods.
   */
  surcharges: Array<Surcharge>;
  /** A summary of the taxes being applied to this Order */
  taxSummary: Array<OrderTaxSummary>;
  /** Equal to subTotal plus shipping */
  total: Scalars['Money']['output'];
  totalQuantity: Scalars['Int']['output'];
  /** The final payable amount. Equal to subTotalWithTax plus shippingWithTax */
  totalWithTax: Scalars['Money']['output'];
  type: OrderType;
  updatedAt: Scalars['DateTime']['output'];
};


export type OrderHistoryArgs = {
  options?: InputMaybe<HistoryEntryListOptions>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  customFields?: Maybe<Scalars['JSON']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  streetLine1?: Maybe<Scalars['String']['output']>;
  streetLine2?: Maybe<Scalars['String']['output']>;
};

export type OrderFilterParameter = {
  _and?: InputMaybe<Array<OrderFilterParameter>>;
  _or?: InputMaybe<Array<OrderFilterParameter>>;
  active?: InputMaybe<BooleanOperators>;
  aggregateOrderId?: InputMaybe<IdOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  customerLastName?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  orderPlacedAt?: InputMaybe<DateOperators>;
  shipping?: InputMaybe<NumberOperators>;
  shippingWithTax?: InputMaybe<NumberOperators>;
  state?: InputMaybe<StringOperators>;
  subTotal?: InputMaybe<NumberOperators>;
  subTotalWithTax?: InputMaybe<NumberOperators>;
  total?: InputMaybe<NumberOperators>;
  totalQuantity?: InputMaybe<NumberOperators>;
  totalWithTax?: InputMaybe<NumberOperators>;
  transactionId?: InputMaybe<StringOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

/** Returned when the maximum order size limit has been reached. */
export type OrderLimitError = ErrorResult & {
  __typename?: 'OrderLimitError';
  errorCode: ErrorCode;
  maxItems: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type OrderLine = Node & {
  __typename?: 'OrderLine';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  /** The price of the line including discounts, excluding tax */
  discountedLinePrice: Scalars['Money']['output'];
  /** The price of the line including discounts and tax */
  discountedLinePriceWithTax: Scalars['Money']['output'];
  /**
   * The price of a single unit including discounts, excluding tax.
   *
   * If Order-level discounts have been applied, this will not be the
   * actual taxable unit price (see `proratedUnitPrice`), but is generally the
   * correct price to display to customers to avoid confusion
   * about the internal handling of distributed Order-level discounts.
   */
  discountedUnitPrice: Scalars['Money']['output'];
  /** The price of a single unit including discounts and tax */
  discountedUnitPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  featuredAsset?: Maybe<Asset>;
  fulfillmentLines?: Maybe<Array<FulfillmentLine>>;
  id: Scalars['ID']['output'];
  /** The total price of the line excluding tax and discounts. */
  linePrice: Scalars['Money']['output'];
  /** The total price of the line including tax but excluding discounts. */
  linePriceWithTax: Scalars['Money']['output'];
  /** The total tax on this line */
  lineTax: Scalars['Money']['output'];
  order: Order;
  /** The quantity at the time the Order was placed */
  orderPlacedQuantity: Scalars['Int']['output'];
  productVariant: ProductVariant;
  /**
   * The actual line price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderLine, and is used in tax
   * and refund calculations.
   */
  proratedLinePrice: Scalars['Money']['output'];
  /** The proratedLinePrice including tax */
  proratedLinePriceWithTax: Scalars['Money']['output'];
  /**
   * The actual unit price, taking into account both item discounts _and_ prorated (proportionally-distributed)
   * Order-level discounts. This value is the true economic value of the OrderItem, and is used in tax
   * and refund calculations.
   */
  proratedUnitPrice: Scalars['Money']['output'];
  /** The proratedUnitPrice including tax */
  proratedUnitPriceWithTax: Scalars['Money']['output'];
  /** The quantity of items purchased */
  quantity: Scalars['Int']['output'];
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float']['output'];
  /** The price of a single unit, excluding tax and discounts */
  unitPrice: Scalars['Money']['output'];
  /** Non-zero if the unitPrice has changed since it was initially added to Order */
  unitPriceChangeSinceAdded: Scalars['Money']['output'];
  /** The price of a single unit, including tax but excluding discounts */
  unitPriceWithTax: Scalars['Money']['output'];
  /** Non-zero if the unitPriceWithTax has changed since it was initially added to Order */
  unitPriceWithTaxChangeSinceAdded: Scalars['Money']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderLineInput = {
  orderLineId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type OrderList = PaginatedList & {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalItems: Scalars['Int']['output'];
};

export type OrderListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<OrderFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<OrderSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderModification = Node & {
  __typename?: 'OrderModification';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isSettled: Scalars['Boolean']['output'];
  lines: Array<OrderModificationLine>;
  note: Scalars['String']['output'];
  payment?: Maybe<Payment>;
  priceChange: Scalars['Money']['output'];
  refund?: Maybe<Refund>;
  surcharges?: Maybe<Array<Surcharge>>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned when attempting to modify the contents of an Order that is not in the `AddingItems` state. */
export type OrderModificationError = ErrorResult & {
  __typename?: 'OrderModificationError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type OrderModificationLine = {
  __typename?: 'OrderModificationLine';
  modification: OrderModification;
  modificationId: Scalars['ID']['output'];
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
};

/** Returned when attempting to modify the contents of an Order that is not in the `Modifying` state. */
export type OrderModificationStateError = ErrorResult & {
  __typename?: 'OrderModificationStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type OrderProcessState = {
  __typename?: 'OrderProcessState';
  name: Scalars['String']['output'];
  to: Array<Scalars['String']['output']>;
};

export type OrderSortParameter = {
  aggregateOrderId?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customerLastName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderPlacedAt?: InputMaybe<SortOrder>;
  shipping?: InputMaybe<SortOrder>;
  shippingWithTax?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  subTotal?: InputMaybe<SortOrder>;
  subTotalWithTax?: InputMaybe<SortOrder>;
  total?: InputMaybe<SortOrder>;
  totalQuantity?: InputMaybe<SortOrder>;
  totalWithTax?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

/** Returned if there is an error in transitioning the Order state */
export type OrderStateTransitionError = ErrorResult & {
  __typename?: 'OrderStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

/**
 * A summary of the taxes being applied to this order, grouped
 * by taxRate.
 */
export type OrderTaxSummary = {
  __typename?: 'OrderTaxSummary';
  /** A description of this tax */
  description: Scalars['String']['output'];
  /** The total net price of OrderLines to which this taxRate applies */
  taxBase: Scalars['Money']['output'];
  /** The taxRate as a percentage */
  taxRate: Scalars['Float']['output'];
  /** The total tax being applied to the Order at this taxRate */
  taxTotal: Scalars['Money']['output'];
};

export enum OrderType {
  Aggregate = 'Aggregate',
  Regular = 'Regular',
  Seller = 'Seller'
}

export type PaginatedList = {
  items: Array<Node>;
  totalItems: Scalars['Int']['output'];
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Money']['output'];
  createdAt: Scalars['DateTime']['output'];
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  method: Scalars['String']['output'];
  nextStates: Array<Scalars['String']['output']>;
  refunds: Array<Refund>;
  state: Scalars['String']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  checker?: Maybe<ConfigurableOperation>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  handler: ConfigurableOperation;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  translations: Array<PaymentMethodTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethodFilterParameter = {
  _and?: InputMaybe<Array<PaymentMethodFilterParameter>>;
  _or?: InputMaybe<Array<PaymentMethodFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type PaymentMethodList = PaginatedList & {
  __typename?: 'PaymentMethodList';
  items: Array<PaymentMethod>;
  totalItems: Scalars['Int']['output'];
};

export type PaymentMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PaymentMethodFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PaymentMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Returned when a call to modifyOrder fails to include a paymentMethod even
 * though the price has increased as a result of the changes.
 */
export type PaymentMethodMissingError = ErrorResult & {
  __typename?: 'PaymentMethodMissingError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type PaymentMethodQuote = {
  __typename?: 'PaymentMethodQuote';
  code: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  eligibilityMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isEligible: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type PaymentMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PaymentMethodTranslation = {
  __typename?: 'PaymentMethodTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethodTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Returned if an attempting to refund a Payment against OrderLines from a different Order */
export type PaymentOrderMismatchError = ErrorResult & {
  __typename?: 'PaymentOrderMismatchError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when there is an error in transitioning the Payment state */
export type PaymentStateTransitionError = ErrorResult & {
  __typename?: 'PaymentStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

/**
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * ## Understanding Permission.Owner
 *
 * `Permission.Owner` is a special permission which is used in some Vendure resolvers to indicate that that resolver should only
 * be accessible to the "owner" of that resource.
 *
 * For example, the Shop API `activeCustomer` query resolver should only return the Customer object for the "owner" of that Customer, i.e.
 * based on the activeUserId of the current session. As a result, the resolver code looks like this:
 *
 * @example
 * ```TypeScript
 * \@Query()
 * \@Allow(Permission.Owner)
 * async activeCustomer(\@Ctx() ctx: RequestContext): Promise<Customer | undefined> {
 *   const userId = ctx.activeUserId;
 *   if (userId) {
 *     return this.customerService.findOneByUserId(ctx, userId);
 *   }
 * }
 * ```
 *
 * Here we can see that the "ownership" must be enforced by custom logic inside the resolver. Since "ownership" cannot be defined generally
 * nor statically encoded at build-time, any resolvers using `Permission.Owner` **must** include logic to enforce that only the owner
 * of the resource has access. If not, then it is the equivalent of using `Permission.Public`.
 *
 *
 * @docsCategory common
 */
export enum Permission {
  /** Authenticated means simply that the user is logged in */
  Authenticated = 'Authenticated',
  /** Grants permission to create Administrator */
  CreateAdministrator = 'CreateAdministrator',
  /** Grants permission to create Article */
  CreateArticle = 'CreateArticle',
  /** Grants permission to create Asset */
  CreateAsset = 'CreateAsset',
  /** Grants permission to create BlogCategory */
  CreateBlogCategory = 'CreateBlogCategory',
  /** Grants permission to create Booking */
  CreateBooking = 'CreateBooking',
  /** Grants permission to create BookingStatus */
  CreateBookingStatus = 'CreateBookingStatus',
  /** Grants permission to create Products, Facets, Assets, Collections */
  CreateCatalog = 'CreateCatalog',
  /** Grants permission to create Channel */
  CreateChannel = 'CreateChannel',
  /** Grants permission to create City */
  CreateCity = 'CreateCity',
  /** Grants permission to create Collection */
  CreateCollection = 'CreateCollection',
  /** Grants permission to create Country */
  CreateCountry = 'CreateCountry',
  /** Grants permission to create Court */
  CreateCourt = 'CreateCourt',
  /** Grants permission to create CourtCategory */
  CreateCourtCategory = 'CreateCourtCategory',
  /** Grants permission to create Customer */
  CreateCustomer = 'CreateCustomer',
  /** Grants permission to create CustomerGroup */
  CreateCustomerGroup = 'CreateCustomerGroup',
  /** Grants permission to create Facet */
  CreateFacet = 'CreateFacet',
  /** Grants permission to create Order */
  CreateOrder = 'CreateOrder',
  /** Grants permission to create PaymentMethod */
  CreatePaymentMethod = 'CreatePaymentMethod',
  /** Grants permission to create Postal */
  CreatePostal = 'CreatePostal',
  /** Grants permission to create Product */
  CreateProduct = 'CreateProduct',
  /** Grants permission to create Promotion */
  CreatePromotion = 'CreatePromotion',
  /** Grants permission to create Seller */
  CreateSeller = 'CreateSeller',
  /** Grants permission to create PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  CreateSettings = 'CreateSettings',
  /** Grants permission to create ShippingMethod */
  CreateShippingMethod = 'CreateShippingMethod',
  /** Grants permission to create State */
  CreateState = 'CreateState',
  /** Grants permission to create StockLocation */
  CreateStockLocation = 'CreateStockLocation',
  /** Grants permission to create System */
  CreateSystem = 'CreateSystem',
  /** Grants permission to create Tag */
  CreateTag = 'CreateTag',
  /** Grants permission to create TaxCategory */
  CreateTaxCategory = 'CreateTaxCategory',
  /** Grants permission to create TaxRate */
  CreateTaxRate = 'CreateTaxRate',
  /** Grants permission to create Zone */
  CreateZone = 'CreateZone',
  /** Grants permission to delete Administrator */
  DeleteAdministrator = 'DeleteAdministrator',
  /** Grants permission to delete Article */
  DeleteArticle = 'DeleteArticle',
  /** Grants permission to delete Asset */
  DeleteAsset = 'DeleteAsset',
  /** Grants permission to delete BlogCategory */
  DeleteBlogCategory = 'DeleteBlogCategory',
  /** Grants permission to delete Booking */
  DeleteBooking = 'DeleteBooking',
  /** Grants permission to delete BookingStatus */
  DeleteBookingStatus = 'DeleteBookingStatus',
  /** Grants permission to delete Products, Facets, Assets, Collections */
  DeleteCatalog = 'DeleteCatalog',
  /** Grants permission to delete Channel */
  DeleteChannel = 'DeleteChannel',
  /** Grants permission to delete City */
  DeleteCity = 'DeleteCity',
  /** Grants permission to delete Collection */
  DeleteCollection = 'DeleteCollection',
  /** Grants permission to delete Country */
  DeleteCountry = 'DeleteCountry',
  /** Grants permission to delete Court */
  DeleteCourt = 'DeleteCourt',
  /** Grants permission to delete CourtCategory */
  DeleteCourtCategory = 'DeleteCourtCategory',
  /** Grants permission to delete Customer */
  DeleteCustomer = 'DeleteCustomer',
  /** Grants permission to delete CustomerGroup */
  DeleteCustomerGroup = 'DeleteCustomerGroup',
  /** Grants permission to delete Facet */
  DeleteFacet = 'DeleteFacet',
  /** Grants permission to delete Order */
  DeleteOrder = 'DeleteOrder',
  /** Grants permission to delete PaymentMethod */
  DeletePaymentMethod = 'DeletePaymentMethod',
  /** Grants permission to delete Postal */
  DeletePostal = 'DeletePostal',
  /** Grants permission to delete Product */
  DeleteProduct = 'DeleteProduct',
  /** Grants permission to delete Promotion */
  DeletePromotion = 'DeletePromotion',
  /** Grants permission to delete Seller */
  DeleteSeller = 'DeleteSeller',
  /** Grants permission to delete PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  DeleteSettings = 'DeleteSettings',
  /** Grants permission to delete ShippingMethod */
  DeleteShippingMethod = 'DeleteShippingMethod',
  /** Grants permission to delete State */
  DeleteState = 'DeleteState',
  /** Grants permission to delete StockLocation */
  DeleteStockLocation = 'DeleteStockLocation',
  /** Grants permission to delete System */
  DeleteSystem = 'DeleteSystem',
  /** Grants permission to delete Tag */
  DeleteTag = 'DeleteTag',
  /** Grants permission to delete TaxCategory */
  DeleteTaxCategory = 'DeleteTaxCategory',
  /** Grants permission to delete TaxRate */
  DeleteTaxRate = 'DeleteTaxRate',
  /** Grants permission to delete Zone */
  DeleteZone = 'DeleteZone',
  /** Owner means the user owns this entity, e.g. a Customer's own Order */
  Owner = 'Owner',
  /** Public means any unauthenticated user may perform the operation */
  Public = 'Public',
  /** Grants permission to read Administrator */
  ReadAdministrator = 'ReadAdministrator',
  /** Grants permission to read Article */
  ReadArticle = 'ReadArticle',
  /** Grants permission to read Asset */
  ReadAsset = 'ReadAsset',
  /** Grants permission to read BlogCategory */
  ReadBlogCategory = 'ReadBlogCategory',
  /** Grants permission to read Booking */
  ReadBooking = 'ReadBooking',
  /** Grants permission to read BookingStatus */
  ReadBookingStatus = 'ReadBookingStatus',
  /** Grants permission to read Products, Facets, Assets, Collections */
  ReadCatalog = 'ReadCatalog',
  /** Grants permission to read Channel */
  ReadChannel = 'ReadChannel',
  /** Grants permission to read City */
  ReadCity = 'ReadCity',
  /** Grants permission to read Collection */
  ReadCollection = 'ReadCollection',
  /** Grants permission to read Country */
  ReadCountry = 'ReadCountry',
  /** Grants permission to read Court */
  ReadCourt = 'ReadCourt',
  /** Grants permission to read CourtCategory */
  ReadCourtCategory = 'ReadCourtCategory',
  /** Grants permission to read Customer */
  ReadCustomer = 'ReadCustomer',
  /** Grants permission to read CustomerGroup */
  ReadCustomerGroup = 'ReadCustomerGroup',
  /** Grants permission to read Facet */
  ReadFacet = 'ReadFacet',
  /** Grants permission to read Order */
  ReadOrder = 'ReadOrder',
  /** Grants permission to read PaymentMethod */
  ReadPaymentMethod = 'ReadPaymentMethod',
  /** Grants permission to read Postal */
  ReadPostal = 'ReadPostal',
  /** Grants permission to read Product */
  ReadProduct = 'ReadProduct',
  /** Grants permission to read Promotion */
  ReadPromotion = 'ReadPromotion',
  /** Grants permission to read Seller */
  ReadSeller = 'ReadSeller',
  /** Grants permission to read PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  ReadSettings = 'ReadSettings',
  /** Grants permission to read ShippingMethod */
  ReadShippingMethod = 'ReadShippingMethod',
  /** Grants permission to read State */
  ReadState = 'ReadState',
  /** Grants permission to read StockLocation */
  ReadStockLocation = 'ReadStockLocation',
  /** Grants permission to read System */
  ReadSystem = 'ReadSystem',
  /** Grants permission to read Tag */
  ReadTag = 'ReadTag',
  /** Grants permission to read TaxCategory */
  ReadTaxCategory = 'ReadTaxCategory',
  /** Grants permission to read TaxRate */
  ReadTaxRate = 'ReadTaxRate',
  /** Grants permission to read Zone */
  ReadZone = 'ReadZone',
  /** SuperAdmin has unrestricted access to all operations */
  SuperAdmin = 'SuperAdmin',
  /** Grants permission to update Administrator */
  UpdateAdministrator = 'UpdateAdministrator',
  /** Grants permission to update Article */
  UpdateArticle = 'UpdateArticle',
  /** Grants permission to update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Grants permission to update BlogCategory */
  UpdateBlogCategory = 'UpdateBlogCategory',
  /** Grants permission to update Booking */
  UpdateBooking = 'UpdateBooking',
  /** Grants permission to update BookingStatus */
  UpdateBookingStatus = 'UpdateBookingStatus',
  /** Grants permission to update Products, Facets, Assets, Collections */
  UpdateCatalog = 'UpdateCatalog',
  /** Grants permission to update Channel */
  UpdateChannel = 'UpdateChannel',
  /** Grants permission to update City */
  UpdateCity = 'UpdateCity',
  /** Grants permission to update Collection */
  UpdateCollection = 'UpdateCollection',
  /** Grants permission to update Country */
  UpdateCountry = 'UpdateCountry',
  /** Grants permission to update Court */
  UpdateCourt = 'UpdateCourt',
  /** Grants permission to update CourtCategory */
  UpdateCourtCategory = 'UpdateCourtCategory',
  /** Grants permission to update Customer */
  UpdateCustomer = 'UpdateCustomer',
  /** Grants permission to update CustomerGroup */
  UpdateCustomerGroup = 'UpdateCustomerGroup',
  /** Grants permission to update Facet */
  UpdateFacet = 'UpdateFacet',
  /** Grants permission to update GlobalSettings */
  UpdateGlobalSettings = 'UpdateGlobalSettings',
  /** Grants permission to update Order */
  UpdateOrder = 'UpdateOrder',
  /** Grants permission to update PaymentMethod */
  UpdatePaymentMethod = 'UpdatePaymentMethod',
  /** Grants permission to update Postal */
  UpdatePostal = 'UpdatePostal',
  /** Grants permission to update Product */
  UpdateProduct = 'UpdateProduct',
  /** Grants permission to update Promotion */
  UpdatePromotion = 'UpdatePromotion',
  /** Grants permission to update Seller */
  UpdateSeller = 'UpdateSeller',
  /** Grants permission to update PaymentMethods, ShippingMethods, TaxCategories, TaxRates, Zones, Countries, System & GlobalSettings */
  UpdateSettings = 'UpdateSettings',
  /** Grants permission to update ShippingMethod */
  UpdateShippingMethod = 'UpdateShippingMethod',
  /** Grants permission to update State */
  UpdateState = 'UpdateState',
  /** Grants permission to update StockLocation */
  UpdateStockLocation = 'UpdateStockLocation',
  /** Grants permission to update System */
  UpdateSystem = 'UpdateSystem',
  /** Grants permission to update Tag */
  UpdateTag = 'UpdateTag',
  /** Grants permission to update TaxCategory */
  UpdateTaxCategory = 'UpdateTaxCategory',
  /** Grants permission to update TaxRate */
  UpdateTaxRate = 'UpdateTaxRate',
  /** Grants permission to update Zone */
  UpdateZone = 'UpdateZone'
}

export type PermissionDefinition = {
  __typename?: 'PermissionDefinition';
  assignable: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Postal = Node & {
  __typename?: 'Postal';
  areaCode?: Maybe<Scalars['String']['output']>;
  city?: Maybe<City>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type PostalFilterParameter = {
  _and?: InputMaybe<Array<PostalFilterParameter>>;
  _or?: InputMaybe<Array<PostalFilterParameter>>;
  areaCode?: InputMaybe<StringOperators>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  postalCode?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type PostalList = PaginatedList & {
  __typename?: 'PostalList';
  items: Array<Postal>;
  totalItems: Scalars['Int']['output'];
};

export type PostalListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PostalFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PostalSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PostalSortParameter = {
  areaCode?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  postalCode?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PreviewCollectionVariantsInput = {
  filters: Array<ConfigurableOperationInput>;
  inheritFilters: Scalars['Boolean']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
};

/** The price range where the result has more than one price */
export type PriceRange = {
  __typename?: 'PriceRange';
  max: Scalars['Money']['output'];
  min: Scalars['Money']['output'];
};

export type Product = Node & {
  __typename?: 'Product';
  assets: Array<Asset>;
  channels: Array<Channel>;
  collections: Array<Collection>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<ProductCustomFields>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  optionGroups: Array<ProductOptionGroup>;
  slug: Scalars['String']['output'];
  translations: Array<ProductTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  /** Returns a paginated, sortable, filterable list of ProductVariants */
  variantList: ProductVariantList;
  /** Returns all ProductVariants */
  variants: Array<ProductVariant>;
};


export type ProductVariantListArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
};

export type ProductCustomFields = {
  __typename?: 'ProductCustomFields';
  day_in_week?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
};

export type ProductFilterParameter = {
  _and?: InputMaybe<Array<ProductFilterParameter>>;
  _or?: InputMaybe<Array<ProductFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  day_in_week?: InputMaybe<StringOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  facetValueId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  sku?: InputMaybe<StringOperators>;
  slug?: InputMaybe<StringOperators>;
  start_time?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProductList = PaginatedList & {
  __typename?: 'ProductList';
  items: Array<Product>;
  totalItems: Scalars['Int']['output'];
};

export type ProductListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductOption = Node & {
  __typename?: 'ProductOption';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  group: ProductOptionGroup;
  groupId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<ProductOptionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroup = Node & {
  __typename?: 'ProductOptionGroup';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  translations: Array<ProductOptionGroupTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroupTranslation = {
  __typename?: 'ProductOptionGroupTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionGroupTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductOptionInUseError = ErrorResult & {
  __typename?: 'ProductOptionInUseError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  optionGroupCode: Scalars['String']['output'];
  productVariantCount: Scalars['Int']['output'];
};

export type ProductOptionTranslation = {
  __typename?: 'ProductOptionTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOptionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  day_in_week?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductVariant = Node & {
  __typename?: 'ProductVariant';
  assets: Array<Asset>;
  channels: Array<Channel>;
  createdAt: Scalars['DateTime']['output'];
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  facetValues: Array<FacetValue>;
  featuredAsset?: Maybe<Asset>;
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  outOfStockThreshold: Scalars['Int']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  prices: Array<ProductVariantPrice>;
  product: Product;
  productId: Scalars['ID']['output'];
  sku: Scalars['String']['output'];
  /** @deprecated use stockLevels */
  stockAllocated: Scalars['Int']['output'];
  stockLevel: Scalars['String']['output'];
  stockLevels: Array<StockLevel>;
  stockMovements: StockMovementList;
  /** @deprecated use stockLevels */
  stockOnHand: Scalars['Int']['output'];
  taxCategory: TaxCategory;
  taxRateApplied: TaxRate;
  trackInventory: GlobalFlag;
  translations: Array<ProductVariantTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  useGlobalOutOfStockThreshold: Scalars['Boolean']['output'];
};


export type ProductVariantStockMovementsArgs = {
  options?: InputMaybe<StockMovementListOptions>;
};

export type ProductVariantFilterParameter = {
  _and?: InputMaybe<Array<ProductVariantFilterParameter>>;
  _or?: InputMaybe<Array<ProductVariantFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  currencyCode?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  facetValueId?: InputMaybe<IdOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  outOfStockThreshold?: InputMaybe<NumberOperators>;
  price?: InputMaybe<NumberOperators>;
  priceWithTax?: InputMaybe<NumberOperators>;
  productId?: InputMaybe<IdOperators>;
  sku?: InputMaybe<StringOperators>;
  stockAllocated?: InputMaybe<NumberOperators>;
  stockLevel?: InputMaybe<StringOperators>;
  stockOnHand?: InputMaybe<NumberOperators>;
  trackInventory?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  useGlobalOutOfStockThreshold?: InputMaybe<BooleanOperators>;
};

export type ProductVariantList = PaginatedList & {
  __typename?: 'ProductVariantList';
  items: Array<ProductVariant>;
  totalItems: Scalars['Int']['output'];
};

export type ProductVariantListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProductVariantFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProductVariantSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductVariantPrice = {
  __typename?: 'ProductVariantPrice';
  currencyCode: CurrencyCode;
  customFields?: Maybe<Scalars['JSON']['output']>;
  price: Scalars['Money']['output'];
};

/**
 * Used to set up update the price of a ProductVariant in a particular Channel.
 * If the `delete` flag is `true`, the price will be deleted for the given Channel.
 */
export type ProductVariantPriceInput = {
  currencyCode: CurrencyCode;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Money']['input'];
};

export type ProductVariantSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  outOfStockThreshold?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  priceWithTax?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  sku?: InputMaybe<SortOrder>;
  stockAllocated?: InputMaybe<SortOrder>;
  stockLevel?: InputMaybe<SortOrder>;
  stockOnHand?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductVariantTranslation = {
  __typename?: 'ProductVariantTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariantTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Promotion = Node & {
  __typename?: 'Promotion';
  actions: Array<ConfigurableOperation>;
  conditions: Array<ConfigurableOperation>;
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  endsAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  perCustomerUsageLimit?: Maybe<Scalars['Int']['output']>;
  startsAt?: Maybe<Scalars['DateTime']['output']>;
  translations: Array<PromotionTranslation>;
  updatedAt: Scalars['DateTime']['output'];
  usageLimit?: Maybe<Scalars['Int']['output']>;
};

export type PromotionFilterParameter = {
  _and?: InputMaybe<Array<PromotionFilterParameter>>;
  _or?: InputMaybe<Array<PromotionFilterParameter>>;
  couponCode?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  endsAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  perCustomerUsageLimit?: InputMaybe<NumberOperators>;
  startsAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  usageLimit?: InputMaybe<NumberOperators>;
};

export type PromotionList = PaginatedList & {
  __typename?: 'PromotionList';
  items: Array<Promotion>;
  totalItems: Scalars['Int']['output'];
};

export type PromotionListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<PromotionFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<PromotionSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PromotionSortParameter = {
  couponCode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  endsAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  perCustomerUsageLimit?: InputMaybe<SortOrder>;
  startsAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  usageLimit?: InputMaybe<SortOrder>;
};

export type PromotionTranslation = {
  __typename?: 'PromotionTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PromotionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Province = Node & Region & {
  __typename?: 'Province';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProvinceFilterParameter = {
  _and?: InputMaybe<Array<ProvinceFilterParameter>>;
  _or?: InputMaybe<Array<ProvinceFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  parentId?: InputMaybe<IdOperators>;
  type?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ProvinceList = PaginatedList & {
  __typename?: 'ProvinceList';
  items: Array<Province>;
  totalItems: Scalars['Int']['output'];
};

export type ProvinceListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ProvinceFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ProvinceSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ProvinceSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProvinceTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Returned if the specified quantity of an OrderLine is greater than the number of items in that line */
export type QuantityTooGreatError = ErrorResult & {
  __typename?: 'QuantityTooGreatError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  activeAdministrator?: Maybe<Administrator>;
  activeChannel: Channel;
  administrator?: Maybe<Administrator>;
  administrators: AdministratorList;
  article?: Maybe<Article>;
  articles: ArticleList;
  /** Get a single Asset by id */
  asset?: Maybe<Asset>;
  /** Get a list of Assets */
  assets: AssetList;
  blogCategories: BlogCategoryList;
  blogCategory?: Maybe<BlogCategory>;
  channel?: Maybe<Channel>;
  channels: ChannelList;
  cities: CityList;
  city?: Maybe<City>;
  /** Get a Collection either by id or slug. If neither id nor slug is specified, an error will result. */
  collection?: Maybe<Collection>;
  collectionFilters: Array<ConfigurableOperationDefinition>;
  collections: CollectionList;
  countries: CountryList;
  country?: Maybe<Country>;
  customer?: Maybe<Customer>;
  customerGroup?: Maybe<CustomerGroup>;
  customerGroups: CustomerGroupList;
  customers: CustomerList;
  /** Returns a list of eligible shipping methods for the draft Order */
  eligibleShippingMethodsForDraftOrder: Array<ShippingMethodQuote>;
  /** Returns all configured EntityDuplicators. */
  entityDuplicators: Array<EntityDuplicatorDefinition>;
  facet?: Maybe<Facet>;
  facetValues: FacetValueList;
  facets: FacetList;
  fulfillmentHandlers: Array<ConfigurableOperationDefinition>;
  getAllBooking: BookingList;
  getAllBookingStatus: BookingStatusList;
  getAllCourt: CourtList;
  getAllCourtType: CourtTypeList;
  getBooking?: Maybe<Booking>;
  getBookingStatus?: Maybe<BookingStatus>;
  getBookingsByCourt: Array<Booking>;
  getCourt?: Maybe<Court>;
  getCourtType?: Maybe<CourtType>;
  globalSettings: GlobalSettings;
  job?: Maybe<Job>;
  jobBufferSize: Array<JobBufferSize>;
  jobQueues: Array<JobQueue>;
  jobs: JobList;
  jobsById: Array<Job>;
  me?: Maybe<CurrentUser>;
  /** Get metrics for the given interval and metric types. */
  metricSummary: Array<MetricSummary>;
  order?: Maybe<Order>;
  orders: OrderList;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethodEligibilityCheckers: Array<ConfigurableOperationDefinition>;
  paymentMethodHandlers: Array<ConfigurableOperationDefinition>;
  paymentMethods: PaymentMethodList;
  pendingSearchIndexUpdates: Scalars['Int']['output'];
  postal?: Maybe<Postal>;
  postals: PostalList;
  /** Used for real-time previews of the contents of a Collection */
  previewCollectionVariants: ProductVariantList;
  /** Get a Product either by id or slug. If neither id nor slug is specified, an error will result. */
  product?: Maybe<Product>;
  productOptionGroup?: Maybe<ProductOptionGroup>;
  productOptionGroups: Array<ProductOptionGroup>;
  /** Get a ProductVariant by id */
  productVariant?: Maybe<ProductVariant>;
  /** List ProductVariants either all or for the specific product. */
  productVariants: ProductVariantList;
  /** List Products */
  products: ProductList;
  promotion?: Maybe<Promotion>;
  promotionActions: Array<ConfigurableOperationDefinition>;
  promotionConditions: Array<ConfigurableOperationDefinition>;
  promotions: PromotionList;
  province?: Maybe<Province>;
  provinces: ProvinceList;
  role?: Maybe<Role>;
  roles: RoleList;
  search: SearchResponse;
  seller?: Maybe<Seller>;
  sellers: SellerList;
  shippingCalculators: Array<ConfigurableOperationDefinition>;
  shippingEligibilityCheckers: Array<ConfigurableOperationDefinition>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods: ShippingMethodList;
  state?: Maybe<State>;
  states: StateList;
  stockLocation?: Maybe<StockLocation>;
  stockLocations: StockLocationList;
  tag: Tag;
  tags: TagList;
  taxCategories: TaxCategoryList;
  taxCategory?: Maybe<TaxCategory>;
  taxRate?: Maybe<TaxRate>;
  taxRates: TaxRateList;
  testEligibleShippingMethods: Array<ShippingMethodQuote>;
  testShippingMethod: TestShippingMethodResult;
  zone?: Maybe<Zone>;
  zones: ZoneList;
};


export type QueryAdministratorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdministratorsArgs = {
  options?: InputMaybe<AdministratorListOptions>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticlesArgs = {
  input?: InputMaybe<RelatedArticle>;
  options?: InputMaybe<ArticleListOptions>;
};


export type QueryAssetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAssetsArgs = {
  options?: InputMaybe<AssetListOptions>;
};


export type QueryBlogCategoriesArgs = {
  options?: InputMaybe<BlogCategoryListOptions>;
};


export type QueryBlogCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelsArgs = {
  options?: InputMaybe<ChannelListOptions>;
};


export type QueryCitiesArgs = {
  idState?: InputMaybe<Scalars['ID']['input']>;
  options?: InputMaybe<CityListOptions>;
};


export type QueryCityArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  options?: InputMaybe<CollectionListOptions>;
};


export type QueryCountriesArgs = {
  options?: InputMaybe<CountryListOptions>;
};


export type QueryCountryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerGroupsArgs = {
  options?: InputMaybe<CustomerGroupListOptions>;
};


export type QueryCustomersArgs = {
  options?: InputMaybe<CustomerListOptions>;
};


export type QueryEligibleShippingMethodsForDraftOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryFacetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFacetValuesArgs = {
  options?: InputMaybe<FacetValueListOptions>;
};


export type QueryFacetsArgs = {
  options?: InputMaybe<FacetListOptions>;
};


export type QueryGetAllBookingArgs = {
  options?: InputMaybe<BookingListOptions>;
};


export type QueryGetAllBookingStatusArgs = {
  options?: InputMaybe<BookingStatusListOptions>;
};


export type QueryGetAllCourtArgs = {
  options?: InputMaybe<CourtListOptions>;
};


export type QueryGetAllCourtTypeArgs = {
  options?: InputMaybe<CourtTypeListOptions>;
};


export type QueryGetBookingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetBookingStatusArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetBookingsByCourtArgs = {
  courtId: Scalars['ID']['input'];
};


export type QueryGetCourtArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCourtTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobArgs = {
  jobId: Scalars['ID']['input'];
};


export type QueryJobBufferSizeArgs = {
  bufferIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryJobsArgs = {
  options?: InputMaybe<JobListOptions>;
};


export type QueryJobsByIdArgs = {
  jobIds: Array<Scalars['ID']['input']>;
};


export type QueryMetricSummaryArgs = {
  input?: InputMaybe<MetricSummaryInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  options?: InputMaybe<OrderListOptions>;
};


export type QueryPaymentMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentMethodsArgs = {
  options?: InputMaybe<PaymentMethodListOptions>;
};


export type QueryPostalArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPostalsArgs = {
  idCity?: InputMaybe<Scalars['ID']['input']>;
  options?: InputMaybe<PostalListOptions>;
};


export type QueryPreviewCollectionVariantsArgs = {
  input: PreviewCollectionVariantsInput;
  options?: InputMaybe<ProductVariantListOptions>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductOptionGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductOptionGroupsArgs = {
  filterTerm?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductVariantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductVariantsArgs = {
  options?: InputMaybe<ProductVariantListOptions>;
  productId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductListOptions>;
};


export type QueryPromotionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPromotionsArgs = {
  options?: InputMaybe<PromotionListOptions>;
};


export type QueryProvinceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProvincesArgs = {
  options?: InputMaybe<ProvinceListOptions>;
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolesArgs = {
  options?: InputMaybe<RoleListOptions>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QuerySellerArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySellersArgs = {
  options?: InputMaybe<SellerListOptions>;
};


export type QueryShippingMethodArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShippingMethodsArgs = {
  options?: InputMaybe<ShippingMethodListOptions>;
};


export type QueryStateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStatesArgs = {
  idCountry?: InputMaybe<Scalars['ID']['input']>;
  options?: InputMaybe<StateListOptions>;
};


export type QueryStockLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStockLocationsArgs = {
  options?: InputMaybe<StockLocationListOptions>;
};


export type QueryTagArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTagsArgs = {
  options?: InputMaybe<TagListOptions>;
};


export type QueryTaxCategoriesArgs = {
  options?: InputMaybe<TaxCategoryListOptions>;
};


export type QueryTaxCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxRateArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaxRatesArgs = {
  options?: InputMaybe<TaxRateListOptions>;
};


export type QueryTestEligibleShippingMethodsArgs = {
  input: TestEligibleShippingMethodsInput;
};


export type QueryTestShippingMethodArgs = {
  input: TestShippingMethodInput;
};


export type QueryZoneArgs = {
  id: Scalars['ID']['input'];
};


export type QueryZonesArgs = {
  options?: InputMaybe<ZoneListOptions>;
};

export type Refund = Node & {
  __typename?: 'Refund';
  adjustment: Scalars['Money']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  items: Scalars['Money']['output'];
  lines: Array<RefundLine>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  paymentId: Scalars['ID']['output'];
  reason?: Maybe<Scalars['String']['output']>;
  shipping: Scalars['Money']['output'];
  state: Scalars['String']['output'];
  total: Scalars['Money']['output'];
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

/** Returned if `amount` is greater than the maximum un-refunded amount of the Payment */
export type RefundAmountError = ErrorResult & {
  __typename?: 'RefundAmountError';
  errorCode: ErrorCode;
  maximumRefundable: Scalars['Int']['output'];
  message: Scalars['String']['output'];
};

export type RefundLine = {
  __typename?: 'RefundLine';
  orderLine: OrderLine;
  orderLineId: Scalars['ID']['output'];
  quantity: Scalars['Int']['output'];
  refund: Refund;
  refundId: Scalars['ID']['output'];
};

export type RefundOrderInput = {
  adjustment: Scalars['Money']['input'];
  /**
   * If an amount is specified, this value will be used to create a Refund rather than calculating the
   * amount automatically. This was added in v2.2 and will be the preferred way to specify the refund
   * amount in the future. The `lines`, `shipping` and `adjustment` fields will likely be removed in a future
   * version.
   */
  amount?: InputMaybe<Scalars['Money']['input']>;
  lines: Array<OrderLineInput>;
  paymentId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  shipping: Scalars['Money']['input'];
};

export type RefundOrderResult = AlreadyRefundedError | MultipleOrderError | NothingToRefundError | OrderStateTransitionError | PaymentOrderMismatchError | QuantityTooGreatError | Refund | RefundAmountError | RefundOrderStateError | RefundStateTransitionError;

/** Returned if an attempting to refund an Order which is not in the expected state */
export type RefundOrderStateError = ErrorResult & {
  __typename?: 'RefundOrderStateError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  orderState: Scalars['String']['output'];
};

/**
 * Returned when a call to modifyOrder fails to include a refundPaymentId even
 * though the price has decreased as a result of the changes.
 */
export type RefundPaymentIdMissingError = ErrorResult & {
  __typename?: 'RefundPaymentIdMissingError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
};

/** Returned when there is an error in transitioning the Refund state */
export type RefundStateTransitionError = ErrorResult & {
  __typename?: 'RefundStateTransitionError';
  errorCode: ErrorCode;
  fromState: Scalars['String']['output'];
  message: Scalars['String']['output'];
  toState: Scalars['String']['output'];
  transitionError: Scalars['String']['output'];
};

export type Region = {
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  parent?: Maybe<Region>;
  parentId?: Maybe<Scalars['ID']['output']>;
  translations: Array<RegionTranslation>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RegionTranslation = {
  __typename?: 'RegionTranslation';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RelationCustomFieldConfig = CustomField & {
  __typename?: 'RelationCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  entity: Scalars['String']['output'];
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  scalarFields: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type Release = Node & StockMovement & {
  __typename?: 'Release';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type RemoveCollectionsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  collectionIds: Array<Scalars['ID']['input']>;
};

export type RemoveFacetFromChannelResult = Facet | FacetInUseError;

export type RemoveFacetsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  facetIds: Array<Scalars['ID']['input']>;
  force?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RemoveOptionGroupFromProductResult = Product | ProductOptionInUseError;

export type RemoveOrderItemsResult = Order | OrderModificationError;

export type RemovePaymentMethodsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  paymentMethodIds: Array<Scalars['ID']['input']>;
};

export type RemoveProductVariantsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  productVariantIds: Array<Scalars['ID']['input']>;
};

export type RemoveProductsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  productIds: Array<Scalars['ID']['input']>;
};

export type RemovePromotionsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  promotionIds: Array<Scalars['ID']['input']>;
};

export type RemoveShippingMethodsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  shippingMethodIds: Array<Scalars['ID']['input']>;
};

export type RemoveStockLocationsFromChannelInput = {
  channelId: Scalars['ID']['input'];
  stockLocationIds: Array<Scalars['ID']['input']>;
};

export type Return = Node & StockMovement & {
  __typename?: 'Return';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type Role = Node & {
  __typename?: 'Role';
  channels: Array<Channel>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<Permission>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RoleFilterParameter = {
  _and?: InputMaybe<Array<RoleFilterParameter>>;
  _or?: InputMaybe<Array<RoleFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type RoleList = PaginatedList & {
  __typename?: 'RoleList';
  items: Array<Role>;
  totalItems: Scalars['Int']['output'];
};

export type RoleListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<RoleFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<RoleSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type Sale = Node & StockMovement & {
  __typename?: 'Sale';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type SearchInput = {
  collectionId?: InputMaybe<Scalars['ID']['input']>;
  collectionSlug?: InputMaybe<Scalars['String']['input']>;
  facetValueFilters?: InputMaybe<Array<FacetValueFilterInput>>;
  groupByProduct?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SearchResultSortParameter>;
  take?: InputMaybe<Scalars['Int']['input']>;
  term?: InputMaybe<Scalars['String']['input']>;
};

export type SearchReindexResponse = {
  __typename?: 'SearchReindexResponse';
  success: Scalars['Boolean']['output'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  collections: Array<CollectionResult>;
  facetValues: Array<FacetValueResult>;
  items: Array<SearchResult>;
  totalItems: Scalars['Int']['output'];
};

export type SearchResult = {
  __typename?: 'SearchResult';
  /** An array of ids of the Channels in which this result appears */
  channelIds: Array<Scalars['ID']['output']>;
  /** An array of ids of the Collections in which this result appears */
  collectionIds: Array<Scalars['ID']['output']>;
  currencyCode: CurrencyCode;
  description: Scalars['String']['output'];
  enabled: Scalars['Boolean']['output'];
  facetIds: Array<Scalars['ID']['output']>;
  facetValueIds: Array<Scalars['ID']['output']>;
  price: SearchResultPrice;
  priceWithTax: SearchResultPrice;
  productAsset?: Maybe<SearchResultAsset>;
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  productVariantAsset?: Maybe<SearchResultAsset>;
  productVariantId: Scalars['ID']['output'];
  productVariantName: Scalars['String']['output'];
  /** A relevance score for the result. Differs between database implementations */
  score: Scalars['Float']['output'];
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type SearchResultAsset = {
  __typename?: 'SearchResultAsset';
  focalPoint?: Maybe<Coordinate>;
  id: Scalars['ID']['output'];
  preview: Scalars['String']['output'];
};

/** The price of a search result product, either as a range or as a single price */
export type SearchResultPrice = PriceRange | SinglePrice;

export type SearchResultSortParameter = {
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type Seller = Node & {
  __typename?: 'Seller';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SellerFilterParameter = {
  _and?: InputMaybe<Array<SellerFilterParameter>>;
  _or?: InputMaybe<Array<SellerFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type SellerList = PaginatedList & {
  __typename?: 'SellerList';
  items: Array<Seller>;
  totalItems: Scalars['Int']['output'];
};

export type SellerListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<SellerFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<SellerSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type SellerSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ServerConfig = {
  __typename?: 'ServerConfig';
  /**
   * This field is deprecated in v2.2 in favor of the entityCustomFields field,
   * which allows custom fields to be defined on user-supplies entities.
   */
  customFieldConfig: CustomFields;
  entityCustomFields: Array<EntityCustomFields>;
  moneyStrategyPrecision: Scalars['Int']['output'];
  orderProcess: Array<OrderProcessState>;
  permissions: Array<PermissionDefinition>;
  permittedAssetTypes: Array<Scalars['String']['output']>;
};

export type SetCustomerForDraftOrderResult = EmailAddressConflictError | Order;

export type SetOrderCustomerInput = {
  customerId: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};

export type SetOrderShippingMethodResult = IneligibleShippingMethodError | NoActiveOrderError | Order | OrderModificationError;

/** Returned if the Payment settlement fails */
export type SettlePaymentError = ErrorResult & {
  __typename?: 'SettlePaymentError';
  errorCode: ErrorCode;
  message: Scalars['String']['output'];
  paymentErrorMessage: Scalars['String']['output'];
};

export type SettlePaymentResult = OrderStateTransitionError | Payment | PaymentStateTransitionError | SettlePaymentError;

export type SettleRefundInput = {
  id: Scalars['ID']['input'];
  transactionId: Scalars['String']['input'];
};

export type SettleRefundResult = Refund | RefundStateTransitionError;

export type ShippingLine = {
  __typename?: 'ShippingLine';
  discountedPrice: Scalars['Money']['output'];
  discountedPriceWithTax: Scalars['Money']['output'];
  discounts: Array<Discount>;
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  shippingMethod: ShippingMethod;
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  calculator: ConfigurableOperation;
  checker: ConfigurableOperation;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  fulfillmentHandlerCode: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  translations: Array<ShippingMethodTranslation>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ShippingMethodFilterParameter = {
  _and?: InputMaybe<Array<ShippingMethodFilterParameter>>;
  _or?: InputMaybe<Array<ShippingMethodFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  fulfillmentHandlerCode?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  languageCode?: InputMaybe<StringOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ShippingMethodList = PaginatedList & {
  __typename?: 'ShippingMethodList';
  items: Array<ShippingMethod>;
  totalItems: Scalars['Int']['output'];
};

export type ShippingMethodListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ShippingMethodFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ShippingMethodSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ShippingMethodQuote = {
  __typename?: 'ShippingMethodQuote';
  code: Scalars['String']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Any optional metadata returned by the ShippingCalculator in the ShippingCalculationResult */
  metadata?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
};

export type ShippingMethodSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fulfillmentHandlerCode?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ShippingMethodTranslation = {
  __typename?: 'ShippingMethodTranslation';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languageCode: LanguageCode;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ShippingMethodTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** The price value where the result has a single price */
export type SinglePrice = {
  __typename?: 'SinglePrice';
  value: Scalars['Money']['output'];
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type State = Node & {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Country>;
  createdAt: Scalars['DateTime']['output'];
  enabled?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type StateFilterParameter = {
  _and?: InputMaybe<Array<StateFilterParameter>>;
  _or?: InputMaybe<Array<StateFilterParameter>>;
  code?: InputMaybe<StringOperators>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type StateList = PaginatedList & {
  __typename?: 'StateList';
  items: Array<State>;
  totalItems: Scalars['Int']['output'];
};

export type StateListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<StateFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<StateSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type StateSortParameter = {
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StockAdjustment = Node & StockMovement & {
  __typename?: 'StockAdjustment';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type StockLevel = Node & {
  __typename?: 'StockLevel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  stockAllocated: Scalars['Int']['output'];
  stockLocation: StockLocation;
  stockLocationId: Scalars['ID']['output'];
  stockOnHand: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type StockLevelInput = {
  stockLocationId: Scalars['ID']['input'];
  stockOnHand: Scalars['Int']['input'];
};

export type StockLocation = Node & {
  __typename?: 'StockLocation';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type StockLocationFilterParameter = {
  _and?: InputMaybe<Array<StockLocationFilterParameter>>;
  _or?: InputMaybe<Array<StockLocationFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  description?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type StockLocationList = PaginatedList & {
  __typename?: 'StockLocationList';
  items: Array<StockLocation>;
  totalItems: Scalars['Int']['output'];
};

export type StockLocationListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<StockLocationFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<StockLocationSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type StockLocationSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StockMovement = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  productVariant: ProductVariant;
  quantity: Scalars['Int']['output'];
  type: StockMovementType;
  updatedAt: Scalars['DateTime']['output'];
};

export type StockMovementItem = Allocation | Cancellation | Release | Return | Sale | StockAdjustment;

export type StockMovementList = {
  __typename?: 'StockMovementList';
  items: Array<StockMovementItem>;
  totalItems: Scalars['Int']['output'];
};

export type StockMovementListOptions = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<StockMovementType>;
};

export enum StockMovementType {
  Adjustment = 'ADJUSTMENT',
  Allocation = 'ALLOCATION',
  Cancellation = 'CANCELLATION',
  Release = 'RELEASE',
  Return = 'RETURN',
  Sale = 'SALE'
}

export type StringCustomFieldConfig = CustomField & {
  __typename?: 'StringCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  length?: Maybe<Scalars['Int']['output']>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  options?: Maybe<Array<StringFieldOption>>;
  pattern?: Maybe<Scalars['String']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type StringFieldOption = {
  __typename?: 'StringFieldOption';
  label?: Maybe<Array<LocalizedString>>;
  value: Scalars['String']['output'];
};

/** Operators for filtering on a list of String fields */
export type StringListOperators = {
  inList: Scalars['String']['input'];
};

/** Operators for filtering on a String field */
export type StringOperators = {
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notEq?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

/** Indicates that an operation succeeded, where we do not want to return any more specific information. */
export type Success = {
  __typename?: 'Success';
  success: Scalars['Boolean']['output'];
};

export type Surcharge = Node & {
  __typename?: 'Surcharge';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
  sku?: Maybe<Scalars['String']['output']>;
  taxLines: Array<TaxLine>;
  taxRate: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SurchargeInput = {
  description: Scalars['String']['input'];
  price: Scalars['Money']['input'];
  priceIncludesTax: Scalars['Boolean']['input'];
  sku?: InputMaybe<Scalars['String']['input']>;
  taxDescription?: InputMaybe<Scalars['String']['input']>;
  taxRate?: InputMaybe<Scalars['Float']['input']>;
};

export type Tag = Node & {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export type TagFilterParameter = {
  _and?: InputMaybe<Array<TagFilterParameter>>;
  _or?: InputMaybe<Array<TagFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<StringOperators>;
};

export type TagList = PaginatedList & {
  __typename?: 'TagList';
  items: Array<Tag>;
  totalItems: Scalars['Int']['output'];
};

export type TagListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TagFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TagSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type TagSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TaxCategory = Node & {
  __typename?: 'TaxCategory';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TaxCategoryFilterParameter = {
  _and?: InputMaybe<Array<TaxCategoryFilterParameter>>;
  _or?: InputMaybe<Array<TaxCategoryFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  isDefault?: InputMaybe<BooleanOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type TaxCategoryList = PaginatedList & {
  __typename?: 'TaxCategoryList';
  items: Array<TaxCategory>;
  totalItems: Scalars['Int']['output'];
};

export type TaxCategoryListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TaxCategoryFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TaxCategorySortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type TaxCategorySortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TaxLine = {
  __typename?: 'TaxLine';
  description: Scalars['String']['output'];
  taxRate: Scalars['Float']['output'];
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  category: TaxCategory;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  customerGroup?: Maybe<CustomerGroup>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['Float']['output'];
  zone: Zone;
};

export type TaxRateFilterParameter = {
  _and?: InputMaybe<Array<TaxRateFilterParameter>>;
  _or?: InputMaybe<Array<TaxRateFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  enabled?: InputMaybe<BooleanOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
  value?: InputMaybe<NumberOperators>;
};

export type TaxRateList = PaginatedList & {
  __typename?: 'TaxRateList';
  items: Array<TaxRate>;
  totalItems: Scalars['Int']['output'];
};

export type TaxRateListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<TaxRateFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<TaxRateSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type TaxRateSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TestEligibleShippingMethodsInput = {
  lines: Array<TestShippingMethodOrderLineInput>;
  shippingAddress: CreateAddressInput;
};

export type TestShippingMethodInput = {
  calculator: ConfigurableOperationInput;
  checker: ConfigurableOperationInput;
  lines: Array<TestShippingMethodOrderLineInput>;
  shippingAddress: CreateAddressInput;
};

export type TestShippingMethodOrderLineInput = {
  productVariantId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type TestShippingMethodQuote = {
  __typename?: 'TestShippingMethodQuote';
  metadata?: Maybe<Scalars['JSON']['output']>;
  price: Scalars['Money']['output'];
  priceWithTax: Scalars['Money']['output'];
};

export type TestShippingMethodResult = {
  __typename?: 'TestShippingMethodResult';
  eligible: Scalars['Boolean']['output'];
  quote?: Maybe<TestShippingMethodQuote>;
};

export type TextCustomFieldConfig = CustomField & {
  __typename?: 'TextCustomFieldConfig';
  description?: Maybe<Array<LocalizedString>>;
  internal?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Array<LocalizedString>>;
  list: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nullable?: Maybe<Scalars['Boolean']['output']>;
  readonly?: Maybe<Scalars['Boolean']['output']>;
  requiresPermission?: Maybe<Array<Permission>>;
  type: Scalars['String']['output'];
  ui?: Maybe<Scalars['JSON']['output']>;
};

export type TransitionFulfillmentToStateResult = Fulfillment | FulfillmentStateTransitionError;

export type TransitionOrderToStateResult = Order | OrderStateTransitionError;

export type TransitionPaymentToStateResult = Payment | PaymentStateTransitionError;

export type UpdateActiveAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Input used to update an Address.
 *
 * The countryCode must correspond to a `code` property of a Country that has been defined in the
 * Vendure server. The `code` property is typically a 2-character ISO code such as "GB", "US", "DE" etc.
 * If an invalid code is passed, the mutation will fail.
 */
export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultBillingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  defaultShippingAddress?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAdministratorInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateArticle = {
  assets?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  body?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  featuredAsset?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  metaKeyword?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAssetInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  focalPoint?: InputMaybe<CoordinateInput>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateBlogCategory = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBooking = {
  booking_date?: InputMaybe<Scalars['Date']['input']>;
  court?: InputMaybe<Scalars['ID']['input']>;
  end_time?: InputMaybe<Scalars['String']['input']>;
  hex_code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  noteAdmin?: InputMaybe<Scalars['String']['input']>;
  noteCustomer?: InputMaybe<Scalars['String']['input']>;
  productVariant?: InputMaybe<Scalars['ID']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['ID']['input']>;
  total_price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateBookingStatus = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateChannelInput = {
  availableCurrencyCodes?: InputMaybe<Array<CurrencyCode>>;
  availableLanguageCodes?: InputMaybe<Array<LanguageCode>>;
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  defaultCurrencyCode?: InputMaybe<CurrencyCode>;
  defaultLanguageCode?: InputMaybe<LanguageCode>;
  defaultShippingZoneId?: InputMaybe<Scalars['ID']['input']>;
  defaultTaxZoneId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  pricesIncludeTax?: InputMaybe<Scalars['Boolean']['input']>;
  sellerId?: InputMaybe<Scalars['ID']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateChannelResult = Channel | LanguageNotAvailableError;

export type UpdateCity = {
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateCollectionInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  filters?: InputMaybe<Array<ConfigurableOperationInput>>;
  id: Scalars['ID']['input'];
  inheritFilters?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  translations?: InputMaybe<Array<UpdateCollectionTranslationInput>>;
};

export type UpdateCollectionTranslationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languageCode: LanguageCode;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCountryInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<CountryTranslationInput>>;
};

export type UpdateCourt = {
  assets?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collection?: InputMaybe<Scalars['ID']['input']>;
  courtType?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  end_time?: InputMaybe<Scalars['String']['input']>;
  featuredAsset?: InputMaybe<Scalars['ID']['input']>;
  hex_code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCourtType = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerGroupInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerNoteInput = {
  note: Scalars['String']['input'];
  noteId: Scalars['ID']['input'];
};

export type UpdateCustomerResult = Customer | EmailAddressConflictError;

export type UpdateFacetInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  translations?: InputMaybe<Array<FacetTranslationInput>>;
};

export type UpdateFacetValueInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<FacetValueTranslationInput>>;
};

export type UpdateGlobalSettingsInput = {
  availableLanguages?: InputMaybe<Array<LanguageCode>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateGlobalSettingsResult = ChannelDefaultLanguageError | GlobalSettings;

export type UpdateOrderAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  streetLine1?: InputMaybe<Scalars['String']['input']>;
  streetLine2?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateOrderItemsResult = InsufficientStockError | NegativeQuantityError | Order | OrderLimitError | OrderModificationError;

export type UpdateOrderNoteInput = {
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  noteId: Scalars['ID']['input'];
};

export type UpdatePaymentMethodInput = {
  checker?: InputMaybe<ConfigurableOperationInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  handler?: InputMaybe<ConfigurableOperationInput>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<PaymentMethodTranslationInput>>;
};

export type UpdatePostal = {
  areaCode?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductCustomFieldsInput = {
  day_in_week?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<UpdateProductCustomFieldsInput>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<ProductTranslationInput>>;
};

export type UpdateProductOptionGroupInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};

export type UpdateProductOptionInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<ProductOptionGroupTranslationInput>>;
};

export type UpdateProductVariantInput = {
  assetIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  facetValueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  featuredAssetId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  optionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Sets the price for the ProductVariant in the Channel's default currency */
  price?: InputMaybe<Scalars['Money']['input']>;
  /** Allows multiple prices to be set for the ProductVariant in different currencies. */
  prices?: InputMaybe<Array<ProductVariantPriceInput>>;
  sku?: InputMaybe<Scalars['String']['input']>;
  stockLevels?: InputMaybe<Array<StockLevelInput>>;
  stockOnHand?: InputMaybe<Scalars['Int']['input']>;
  taxCategoryId?: InputMaybe<Scalars['ID']['input']>;
  trackInventory?: InputMaybe<GlobalFlag>;
  translations?: InputMaybe<Array<ProductVariantTranslationInput>>;
  useGlobalOutOfStockThreshold?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdatePromotionInput = {
  actions?: InputMaybe<Array<ConfigurableOperationInput>>;
  conditions?: InputMaybe<Array<ConfigurableOperationInput>>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endsAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  perCustomerUsageLimit?: InputMaybe<Scalars['Int']['input']>;
  startsAt?: InputMaybe<Scalars['DateTime']['input']>;
  translations?: InputMaybe<Array<PromotionTranslationInput>>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePromotionResult = MissingConditionsError | Promotion;

export type UpdateProvinceInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  translations?: InputMaybe<Array<ProvinceTranslationInput>>;
};

export type UpdateResponse = {
  __typename?: 'UpdateResponse';
  message?: Maybe<Scalars['String']['output']>;
  result: UpdateResult;
};

export enum UpdateResult {
  NotUpdated = 'NOT_UPDATED',
  Updated = 'UPDATED'
}

export type UpdateRoleInput = {
  channelIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  permissions?: InputMaybe<Array<Permission>>;
};

export type UpdateSellerInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShippingMethodInput = {
  calculator?: InputMaybe<ConfigurableOperationInput>;
  checker?: InputMaybe<ConfigurableOperationInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  fulfillmentHandler?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  translations: Array<ShippingMethodTranslationInput>;
};

export type UpdateState = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateStockLocationInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTagInput = {
  id: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaxCategoryInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTaxRateInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  customerGroupId?: InputMaybe<Scalars['ID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
  zoneId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateZoneInput = {
  customFields?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  authenticationMethods: Array<AuthenticationMethod>;
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  roles: Array<Role>;
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

export type Zone = Node & {
  __typename?: 'Zone';
  createdAt: Scalars['DateTime']['output'];
  customFields?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  members: Array<Region>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ZoneFilterParameter = {
  _and?: InputMaybe<Array<ZoneFilterParameter>>;
  _or?: InputMaybe<Array<ZoneFilterParameter>>;
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type ZoneList = PaginatedList & {
  __typename?: 'ZoneList';
  items: Array<Zone>;
  totalItems: Scalars['Int']['output'];
};

export type ZoneListOptions = {
  /** Allows the results to be filtered */
  filter?: InputMaybe<ZoneFilterParameter>;
  /** Specifies whether multiple top-level "filter" fields should be combined with a logical AND or OR operation. Defaults to AND. */
  filterOperator?: InputMaybe<LogicalOperator>;
  /** Skips the first n results, for use in pagination */
  skip?: InputMaybe<Scalars['Int']['input']>;
  /** Specifies which properties to sort the results by */
  sort?: InputMaybe<ZoneSortParameter>;
  /** Takes n results, for use in pagination */
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type ZoneSortParameter = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type RelatedArticle = {
  relatedSlug?: InputMaybe<Scalars['String']['input']>;
};

export type GetProductsWithFacetValuesByIdsQueryVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetProductsWithFacetValuesByIdsQuery = { __typename?: 'Query', products: { __typename?: 'ProductList', items: Array<{ __typename?: 'Product', id: string, name: string, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, facet: { __typename?: 'Facet', id: string, name: string, code: string } }> }> } };

export type GetVariantsWithFacetValuesByIdsQueryVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type GetVariantsWithFacetValuesByIdsQuery = { __typename?: 'Query', productVariants: { __typename?: 'ProductVariantList', items: Array<{ __typename?: 'ProductVariant', id: string, name: string, sku: string, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string, facet: { __typename?: 'Facet', id: string, name: string, code: string } }> }> } };

export type UpdateProductsBulkMutationVariables = Exact<{
  input: Array<UpdateProductInput> | UpdateProductInput;
}>;


export type UpdateProductsBulkMutation = { __typename?: 'Mutation', updateProducts: Array<{ __typename?: 'Product', id: string, name: string, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }> }> };

export type UpdateVariantsBulkMutationVariables = Exact<{
  input: Array<UpdateProductVariantInput> | UpdateProductVariantInput;
}>;


export type UpdateVariantsBulkMutation = { __typename?: 'Mutation', updateProductVariants: Array<{ __typename?: 'ProductVariant', id: string, name: string, facetValues: Array<{ __typename?: 'FacetValue', id: string, name: string, code: string }> } | null> };

export type ProductListQueryProductFragmentFragment = { __typename?: 'Product', id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, slug: string, featuredAsset?: { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, preview: string, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null } | null, variantList: { __typename?: 'ProductVariantList', totalItems: number } } & { ' $fragmentName'?: 'ProductListQueryProductFragmentFragment' };

export type ProductListQueryQueryVariables = Exact<{
  options?: InputMaybe<ProductListOptions>;
}>;


export type ProductListQueryQuery = { __typename?: 'Query', products: { __typename?: 'ProductList', totalItems: number, items: Array<(
      { __typename?: 'Product' }
      & { ' $fragmentRefs'?: { 'ProductListQueryProductFragmentFragment': ProductListQueryProductFragmentFragment } }
    )> } };

export type ProductOptionFragment = { __typename?: 'ProductOption', id: string, createdAt: any, updatedAt: any, code: string, languageCode: LanguageCode, name: string, groupId: string, translations: Array<{ __typename?: 'ProductOptionTranslation', id: string, languageCode: LanguageCode, name: string }> } & { ' $fragmentName'?: 'ProductOptionFragment' };

export type ProductVariantDetailQueryProductVariantFragmentFragment = { __typename?: 'ProductVariant', id: string, createdAt: any, updatedAt: any, enabled: boolean, languageCode: LanguageCode, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, stockOnHand: number, stockAllocated: number, trackInventory: GlobalFlag, outOfStockThreshold: number, useGlobalOutOfStockThreshold: boolean, sku: string, prices: Array<{ __typename?: 'ProductVariantPrice', price: number, currencyCode: CurrencyCode }>, taxRateApplied: { __typename?: 'TaxRate', id: string, name: string, value: number }, taxCategory: { __typename?: 'TaxCategory', id: string, name: string }, options: Array<(
    { __typename?: 'ProductOption' }
    & { ' $fragmentRefs'?: { 'ProductOptionFragment': ProductOptionFragment } }
  )>, stockLevels: Array<{ __typename?: 'StockLevel', id: string, createdAt: any, updatedAt: any, stockOnHand: number, stockAllocated: number, stockLocationId: string, stockLocation: { __typename?: 'StockLocation', id: string, createdAt: any, updatedAt: any, name: string } }>, facetValues: Array<{ __typename?: 'FacetValue', id: string, code: string, name: string, facet: { __typename?: 'Facet', id: string, name: string } }>, featuredAsset?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null, assets: Array<(
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  )>, translations: Array<{ __typename?: 'ProductVariantTranslation', id: string, languageCode: LanguageCode, name: string }>, channels: Array<{ __typename?: 'Channel', id: string, code: string }>, product: { __typename?: 'Product', id: string, name: string, optionGroups: Array<{ __typename?: 'ProductOptionGroup', id: string, name: string, code: string, translations: Array<{ __typename?: 'ProductOptionGroupTranslation', id: string, languageCode: LanguageCode, name: string }> }> } } & { ' $fragmentName'?: 'ProductVariantDetailQueryProductVariantFragmentFragment' };

export type GetProductVariantDetailQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProductVariantDetailQuery = { __typename?: 'Query', productVariant?: (
    { __typename?: 'ProductVariant' }
    & { ' $fragmentRefs'?: { 'ProductVariantDetailQueryProductVariantFragmentFragment': ProductVariantDetailQueryProductVariantFragmentFragment } }
  ) | null, stockLocations: { __typename?: 'StockLocationList', items: Array<{ __typename?: 'StockLocation', id: string, createdAt: any, updatedAt: any, name: string, description: string }> }, taxCategories: { __typename?: 'TaxCategoryList', totalItems: number, items: Array<{ __typename?: 'TaxCategory', id: string, createdAt: any, updatedAt: any, name: string, isDefault: boolean }> }, activeChannel: { __typename?: 'Channel', id: string, availableCurrencyCodes: Array<CurrencyCode>, defaultCurrencyCode: CurrencyCode } };

export type ProductVariantUpdateMutationMutationVariables = Exact<{
  input: Array<UpdateProductVariantInput> | UpdateProductVariantInput;
}>;


export type ProductVariantUpdateMutationMutation = { __typename?: 'Mutation', updateProductVariants: Array<(
    { __typename?: 'ProductVariant' }
    & { ' $fragmentRefs'?: { 'ProductVariantDetailQueryProductVariantFragmentFragment': ProductVariantDetailQueryProductVariantFragmentFragment } }
  ) | null> };

export type ProductVariantListQueryProductVariantFragmentFragment = { __typename?: 'ProductVariant', id: string, createdAt: any, updatedAt: any, productId: string, enabled: boolean, languageCode: LanguageCode, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, trackInventory: GlobalFlag, outOfStockThreshold: number, useGlobalOutOfStockThreshold: boolean, sku: string, stockLevels: Array<{ __typename?: 'StockLevel', id: string, createdAt: any, updatedAt: any, stockLocationId: string, stockOnHand: number, stockAllocated: number, stockLocation: { __typename?: 'StockLocation', id: string, createdAt: any, updatedAt: any, name: string } }>, featuredAsset?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null } & { ' $fragmentName'?: 'ProductVariantListQueryProductVariantFragmentFragment' };

export type ProductVariantListQueryQueryVariables = Exact<{
  options: ProductVariantListOptions;
}>;


export type ProductVariantListQueryQuery = { __typename?: 'Query', productVariants: { __typename?: 'ProductVariantList', totalItems: number, items: Array<(
      { __typename?: 'ProductVariant' }
      & { ' $fragmentRefs'?: { 'ProductVariantListQueryProductVariantFragmentFragment': ProductVariantListQueryProductVariantFragmentFragment } }
    )> } };

export type GetEntityDuplicatorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEntityDuplicatorsQuery = { __typename?: 'Query', entityDuplicators: Array<{ __typename?: 'EntityDuplicatorDefinition', code: string, description: string, forEntities: Array<string>, requiresPermission: Array<Permission>, args: Array<{ __typename?: 'ConfigArgDefinition', name: string, type: string, required: boolean, defaultValue?: any | null, list: boolean, ui?: any | null, label?: string | null, description?: string | null }> }> };

export type DuplicateEntityMutationVariables = Exact<{
  input: DuplicateEntityInput;
}>;


export type DuplicateEntityMutation = { __typename?: 'Mutation', duplicateEntity: { __typename?: 'DuplicateEntityError', errorCode: ErrorCode, message: string, duplicationError: string } | { __typename?: 'DuplicateEntitySuccess', newEntityId: string } };

export type AssetFragment = { __typename?: 'Asset', id: string, createdAt: any, updatedAt: any, name: string, fileSize: number, mimeType: string, type: AssetType, preview: string, source: string, width: number, height: number, focalPoint?: { __typename?: 'Coordinate', x: number, y: number } | null } & { ' $fragmentName'?: 'AssetFragment' };

export type GetProductVariantsForMultiSelectorQueryVariables = Exact<{
  options: ProductVariantListOptions;
}>;


export type GetProductVariantsForMultiSelectorQuery = { __typename?: 'Query', productVariants: { __typename?: 'ProductVariantList', totalItems: number, items: Array<{ __typename?: 'ProductVariant', id: string, createdAt: any, updatedAt: any, productId: string, enabled: boolean, languageCode: LanguageCode, name: string, price: number, currencyCode: CurrencyCode, priceWithTax: number, trackInventory: GlobalFlag, outOfStockThreshold: number, useGlobalOutOfStockThreshold: boolean, sku: string, stockLevels: Array<{ __typename?: 'StockLevel', id: string, createdAt: any, updatedAt: any, stockLocationId: string, stockOnHand: number, stockAllocated: number, stockLocation: { __typename?: 'StockLocation', id: string, createdAt: any, updatedAt: any, name: string } }>, featuredAsset?: (
        { __typename?: 'Asset' }
        & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
      ) | null }> } };

export type CreateCourtTypeMutationVariables = Exact<{
  input: CreateCourtType;
}>;


export type CreateCourtTypeMutation = { __typename?: 'Mutation', createCourtType?: { __typename?: 'CourtType', id: string } | null };

export type UpdateCourtTypeMutationVariables = Exact<{
  input: UpdateCourtType;
}>;


export type UpdateCourtTypeMutation = { __typename?: 'Mutation', updateCourtType?: { __typename?: 'CourtType', id: string } | null };

export type GetAllCourtTypeQueryVariables = Exact<{
  options?: InputMaybe<CourtTypeListOptions>;
}>;


export type GetAllCourtTypeQuery = { __typename?: 'Query', getAllCourtType: { __typename?: 'CourtTypeList', totalItems: number, items: Array<{ __typename?: 'CourtType', id: string, name: string, slug: string, description: string, enabled: boolean, createdAt: any, updatedAt: any }> } };

export type DeleteCourtTypesMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type DeleteCourtTypesMutation = { __typename?: 'Mutation', deleteCourtTypes: Array<{ __typename?: 'DeletionResponse', result: DeletionResult, message?: string | null }> };

export type GetCustomerAddressesQueryVariables = Exact<{
  customerId: Scalars['ID']['input'];
}>;


export type GetCustomerAddressesQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', id: string, addresses?: Array<(
      { __typename?: 'Address' }
      & { ' $fragmentRefs'?: { 'AddressFragment': AddressFragment } }
    )> | null } | null };

export type AddressFragment = { __typename?: 'Address', id: string, createdAt: any, updatedAt: any, fullName?: string | null, company?: string | null, streetLine1: string, streetLine2?: string | null, city?: string | null, province?: string | null, postalCode?: string | null, phoneNumber?: string | null, defaultShippingAddress?: boolean | null, defaultBillingAddress?: boolean | null, country: { __typename?: 'Country', id: string, code: string, name: string } } & { ' $fragmentName'?: 'AddressFragment' };

export type GetSellerOrdersQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type GetSellerOrdersQuery = { __typename?: 'Query', order?: { __typename?: 'Order', id: string, sellerOrders?: Array<{ __typename?: 'Order', id: string, code: string, state: string, orderPlacedAt?: any | null, currencyCode: CurrencyCode, totalWithTax: number, channels: Array<{ __typename?: 'Channel', id: string, code: string, seller?: { __typename?: 'Seller', id: string, name: string } | null }> }> | null } | null };

export const ProductListQueryProductFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListQueryProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variantList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<ProductListQueryProductFragmentFragment, unknown>;
export const ProductOptionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProductOptionFragment, unknown>;
export const AssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]} as unknown as DocumentNode<AssetFragment, unknown>;
export const ProductVariantDetailQueryProductVariantFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariantDetailQueryProductVariantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"useGlobalOutOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]} as unknown as DocumentNode<ProductVariantDetailQueryProductVariantFragmentFragment, unknown>;
export const ProductVariantListQueryProductVariantFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariantListQueryProductVariantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"useGlobalOutOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]} as unknown as DocumentNode<ProductVariantListQueryProductVariantFragmentFragment, unknown>;
export const AddressFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Address"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}}]} as unknown as DocumentNode<AddressFragment, unknown>;
export const GetProductsWithFacetValuesByIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsWithFacetValuesByIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductsWithFacetValuesByIdsQuery, GetProductsWithFacetValuesByIdsQueryVariables>;
export const GetVariantsWithFacetValuesByIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVariantsWithFacetValuesByIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVariantsWithFacetValuesByIdsQuery, GetVariantsWithFacetValuesByIdsQueryVariables>;
export const UpdateProductsBulkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProductsBulk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProductsBulkMutation, UpdateProductsBulkMutationVariables>;
export const UpdateVariantsBulkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateVariantsBulk"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductVariantInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateVariantsBulkMutation, UpdateVariantsBulkMutationVariables>;
export const ProductListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductListQueryProductFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductListQueryProductFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"variantList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<ProductListQueryQuery, ProductListQueryQueryVariables>;
export const GetProductVariantDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductVariantDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariantDetailQueryProductVariantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockLocations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}},{"kind":"Field","name":{"kind":"Name","value":"activeChannel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"availableCurrencyCodes"}},{"kind":"Field","name":{"kind":"Name","value":"defaultCurrencyCode"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariantDetailQueryProductVariantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"useGlobalOutOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductVariantDetailQuery, GetProductVariantDetailQueryVariables>;
export const ProductVariantUpdateMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProductVariantUpdateMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateProductVariantInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProductVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariantDetailQueryProductVariantFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductOption"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOption"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"groupId"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariantDetailQueryProductVariantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"prices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"useGlobalOutOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"taxRateApplied"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"taxCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductOption"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"facetValues"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"facet"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"optionGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"translations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProductVariantUpdateMutationMutation, ProductVariantUpdateMutationMutationVariables>;
export const ProductVariantListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProductVariantListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantListOptions"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductVariantListQueryProductVariantFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductVariantListQueryProductVariantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"useGlobalOutOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}}]}}]} as unknown as DocumentNode<ProductVariantListQueryQuery, ProductVariantListQueryQueryVariables>;
export const GetEntityDuplicatorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEntityDuplicators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entityDuplicators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forEntities"}},{"kind":"Field","name":{"kind":"Name","value":"requiresPermission"}},{"kind":"Field","name":{"kind":"Name","value":"args"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"defaultValue"}},{"kind":"Field","name":{"kind":"Name","value":"list"}},{"kind":"Field","name":{"kind":"Name","value":"ui"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetEntityDuplicatorsQuery, GetEntityDuplicatorsQueryVariables>;
export const DuplicateEntityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DuplicateEntity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DuplicateEntityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duplicateEntity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DuplicateEntitySuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newEntityId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ErrorResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorCode"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DuplicateEntityError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duplicationError"}}]}}]}}]}}]} as unknown as DocumentNode<DuplicateEntityMutation, DuplicateEntityMutationVariables>;
export const GetProductVariantsForMultiSelectorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductVariantsForMultiSelector"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductVariantListOptions"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productVariants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"productId"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"languageCode"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"priceWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"trackInventory"}},{"kind":"Field","name":{"kind":"Name","value":"outOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"stockLevels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocationId"}},{"kind":"Field","name":{"kind":"Name","value":"stockOnHand"}},{"kind":"Field","name":{"kind":"Name","value":"stockAllocated"}},{"kind":"Field","name":{"kind":"Name","value":"stockLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"useGlobalOutOfStockThreshold"}},{"kind":"Field","name":{"kind":"Name","value":"sku"}},{"kind":"Field","name":{"kind":"Name","value":"featuredAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"source"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}}]}}]}}]} as unknown as DocumentNode<GetProductVariantsForMultiSelectorQuery, GetProductVariantsForMultiSelectorQueryVariables>;
export const CreateCourtTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCourtType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCourtType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCourtType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCourtTypeMutation, CreateCourtTypeMutationVariables>;
export const UpdateCourtTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCourtType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCourtType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCourtType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateCourtTypeMutation, UpdateCourtTypeMutationVariables>;
export const GetAllCourtTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCourtType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourtTypeListOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCourtType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}}]}}]}}]} as unknown as DocumentNode<GetAllCourtTypeQuery, GetAllCourtTypeQueryVariables>;
export const DeleteCourtTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCourtTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCourtTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteCourtTypesMutation, DeleteCourtTypesMutationVariables>;
export const GetCustomerAddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomerAddresses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Address"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Address"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Address"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine1"}},{"kind":"Field","name":{"kind":"Name","value":"streetLine2"}},{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"province"}},{"kind":"Field","name":{"kind":"Name","value":"postalCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"defaultShippingAddress"}},{"kind":"Field","name":{"kind":"Name","value":"defaultBillingAddress"}}]}}]} as unknown as DocumentNode<GetCustomerAddressesQuery, GetCustomerAddressesQueryVariables>;
export const GetSellerOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSellerOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sellerOrders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"orderPlacedAt"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithTax"}},{"kind":"Field","name":{"kind":"Name","value":"channels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetSellerOrdersQuery, GetSellerOrdersQueryVariables>;