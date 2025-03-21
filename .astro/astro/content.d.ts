declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"for-candidates/example copy.md": {
	id: "for-candidates/example copy.md";
  slug: "for-candidates/example-copy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-candidates/example.md": {
	id: "for-candidates/example.md";
  slug: "for-candidates/example";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-employees/connect-your-network.md": {
	id: "for-employees/connect-your-network.md";
  slug: "for-employees/connect-your-network";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-employees/getting-started.md": {
	id: "for-employees/getting-started.md";
  slug: "for-employees/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-employees/privacy-notice.md": {
	id: "for-employees/privacy-notice.md";
  slug: "for-employees/privacy-notice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-employees/refer-a-candidate.md": {
	id: "for-employees/refer-a-candidate.md";
  slug: "for-employees/refer-a-candidate";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-employees/review-suggestions.md": {
	id: "for-employees/review-suggestions.md";
  slug: "for-employees/review-suggestions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-employees/track-your-referrals.md": {
	id: "for-employees/track-your-referrals.md";
  slug: "for-employees/track-your-referrals";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-recruiters/connect-your-systems.md": {
	id: "for-recruiters/connect-your-systems.md";
  slug: "for-recruiters/connect-your-systems";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-recruiters/find-candidates.md": {
	id: "for-recruiters/find-candidates.md";
  slug: "for-recruiters/find-candidates";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-recruiters/getting-started.md": {
	id: "for-recruiters/getting-started.md";
  slug: "for-recruiters/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-recruiters/invite-your-colleagues.md": {
	id: "for-recruiters/invite-your-colleagues.md";
  slug: "for-recruiters/invite-your-colleagues";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-recruiters/nudge-your-colleagues.md": {
	id: "for-recruiters/nudge-your-colleagues.md";
  slug: "for-recruiters/nudge-your-colleagues";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-recruiters/refer-a-recruiter.md": {
	id: "for-recruiters/refer-a-recruiter.md";
  slug: "for-recruiters/refer-a-recruiter";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-recruiters/review-candidates.md": {
	id: "for-recruiters/review-candidates.md";
  slug: "for-recruiters/review-candidates";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"for-recruiters/track-suggestions.md": {
	id: "for-recruiters/track-suggestions.md";
  slug: "for-recruiters/track-suggestions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"integrations/bamboohr.md": {
	id: "integrations/bamboohr.md";
  slug: "integrations/bamboohr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/bullhorn.md": {
	id: "integrations/bullhorn.md";
  slug: "integrations/bullhorn";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/carerix.md": {
	id: "integrations/carerix.md";
  slug: "integrations/carerix";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/cornerstone.md": {
	id: "integrations/cornerstone.md";
  slug: "integrations/cornerstone";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/factorial-hr.md": {
	id: "integrations/factorial-hr.md";
  slug: "integrations/factorial-hr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/greenhouse.md": {
	id: "integrations/greenhouse.md";
  slug: "integrations/greenhouse";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/icims.md": {
	id: "integrations/icims.md";
  slug: "integrations/icims";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/jobvite.md": {
	id: "integrations/jobvite.md";
  slug: "integrations/jobvite";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/lever.md": {
	id: "integrations/lever.md";
  slug: "integrations/lever";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/oracle-recruiting.md": {
	id: "integrations/oracle-recruiting.md";
  slug: "integrations/oracle-recruiting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/personio.md": {
	id: "integrations/personio.md";
  slug: "integrations/personio";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/recruitee.md": {
	id: "integrations/recruitee.md";
  slug: "integrations/recruitee";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/sage.md": {
	id: "integrations/sage.md";
  slug: "integrations/sage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/sap-successfactors.md": {
	id: "integrations/sap-successfactors.md";
  slug: "integrations/sap-successfactors";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/smartrecruiters.md": {
	id: "integrations/smartrecruiters.md";
  slug: "integrations/smartrecruiters";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/teamtailor.md": {
	id: "integrations/teamtailor.md";
  slug: "integrations/teamtailor";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/workable.md": {
	id: "integrations/workable.md";
  slug: "integrations/workable";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"integrations/workday.md": {
	id: "integrations/workday.md";
  slug: "integrations/workday";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"intro-to-wintro/request-a-demo.md": {
	id: "intro-to-wintro/request-a-demo.md";
  slug: "intro-to-wintro/request-a-demo";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"intro-to-wintro/roadmap.md": {
	id: "intro-to-wintro/roadmap.md";
  slug: "intro-to-wintro/roadmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"intro-to-wintro/what-is-wintro.mdx": {
	id: "intro-to-wintro/what-is-wintro.mdx";
  slug: "intro-to-wintro/what-is-wintro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"security-compliance/access-controls.md": {
	id: "security-compliance/access-controls.md";
  slug: "security-compliance/access-controls";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"security-compliance/architecture.md": {
	id: "security-compliance/architecture.md";
  slug: "security-compliance/architecture";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"security-compliance/cognitive-services.md": {
	id: "security-compliance/cognitive-services.md";
  slug: "security-compliance/cognitive-services";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"security-compliance/data-inquiry.md": {
	id: "security-compliance/data-inquiry.md";
  slug: "security-compliance/data-inquiry";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"security-compliance/data-processing.md": {
	id: "security-compliance/data-processing.md";
  slug: "security-compliance/data-processing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"security-compliance/gdpr.md": {
	id: "security-compliance/gdpr.md";
  slug: "security-compliance/gdpr";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"security-compliance/general.md": {
	id: "security-compliance/general.md";
  slug: "security-compliance/general";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"security-compliance/integrations.md": {
	id: "security-compliance/integrations.md";
  slug: "security-compliance/integrations";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"security-compliance/secure-development.md": {
	id: "security-compliance/secure-development.md";
  slug: "security-compliance/secure-development";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
