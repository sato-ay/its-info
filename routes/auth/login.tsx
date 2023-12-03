import { Handlers, PageProps } from "$fresh/server.ts";
import oauth2Client from "/util/auth.ts";
import { setCookie } from "$std/http/cookie.ts";
import "https://deno.land/std@0.133.0/dotenv/load.ts";

export const handler: Handlers = {
	async GET(req, ctx) {
		const { uri, codeVerifier } = await oauth2Client.code
			.getAuthorizationUri();
		const response = await ctx.render({ uri });
		setCookie(response.headers, {
			name: "code_verifier",
			value: codeVerifier,
			maxAge: 60 * 60 * 24 * 7,
			httpOnly: true,
		});
		return response;
	},
};

export default function Home({ url, data }: PageProps<{ uri: string }>) {
	return (
		<>
			<a href={data.uri}>Sign in with Google</a>
		</>
	);
}
