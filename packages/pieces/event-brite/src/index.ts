
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";
import { parseEventBriteWebhook } from './lib/actions/parse-webhook';

export const eventBrite = createPiece({
  displayName: "Event-brite",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.8.0',
  logoUrl: "https://cdn.activepieces.com/pieces/event-brite.png",
  authors: [],
  actions: [parseEventBriteWebhook],
  triggers: [],
});
