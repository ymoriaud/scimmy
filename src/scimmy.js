import Types from "./lib/types.js";
import Messages from "./lib/messages.js";
import Resources from "./lib/resources.js";
import Schemas from "./lib/schemas.js";
import Config from "./lib/config.js";

/**
 * SCIMMY Container Class
 * @namespace SCIMMY
 * @property {SCIMMY.Config} Config - SCIM Service Provider Configuration container store
 * @property {SCIMMY.Types} Types - SCIMMY classes for implementing schemas and resource types
 * @property {SCIMMY.Messages} Messages - Implementations of non-resource SCIM "message" schemas, such as ListResponse and PatchOp
 * @property {SCIMMY.Schemas} Schemas
 * Container store for declaring and retrieving schemas implemented by a service provider.<br/>
 * Also provides access to bundled schema implementations of [SCIM Core Resource Schemas]{@link https://datatracker.ietf.org/doc/html/rfc7643#section-4}.
 * @property {SCIMMY.Resources} Resources
 * Container store for declaring and retrieving resource types implemented by a service provider.<br/>
 * Also provides access to bundled resource type implementations of [SCIM Core Resource Types]{@link https://datatracker.ietf.org/doc/html/rfc7643#section-4}.
 * @description
 * SCIMMY provides the following interfaces:
 * *    ```{@link SCIMMY.Config}```
 *      *   SCIM Service Provider Configuration container store.
 * *    ```{@link SCIMMY.Types}```
 *      *   SCIMMY classes for implementing schemas and resource types.
 * *    ```{@link SCIMMY.Messages}```
 *      *   Implementations of non-resource SCIM "message" schemas, such as ListResponse and PatchOp.
 * *    ```{@link SCIMMY.Schemas}```
 *      *   Container store for declaring and retrieving schemas implemented by a service provider.
 *      *   Also provides access to bundled schema implementations of [SCIM Core Resource Schemas](https://datatracker.ietf.org/doc/html/rfc7643#section-4).
 * *    ```{@link SCIMMY.Resources}```
 *      *   Container store for declaring and retrieving resource types implemented by a service provider.
 *      *   Also provides access to bundled resource type implementations of [SCIM Core Resource Types](https://datatracker.ietf.org/doc/html/rfc7643#section-4).
 */
export default class SCIMMY {
    static Config = Config;
    static Types = Types;
    static Messages = Messages;
    static Schemas = Schemas;
    static Resources = Resources;
}