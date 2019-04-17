import { ResourceType, ShaderType, PrimitiveType, BufferTarget, BufferDataType, ShaderDataType, TextureFilter, TextureWrapping, TextureType, TextureFormat } from './enums';
export * from './enums';
export declare type RequestResourceCallback = (resourceType: ResourceType, resourceName: string) => void;
export declare class LazyRenderer {
    private readonly canvas;
    private readonly gl;
    private readonly requestResource;
    private readonly framebuffers;
    private readonly programs;
    private readonly shaders;
    private readonly primitives;
    private readonly accessors;
    private readonly buffers;
    private readonly samplers;
    private readonly textures;
    private readonly attributeLocations;
    private nextAttributeLocation;
    constructor(canvas: HTMLCanvasElement, requestResource: RequestResourceCallback);
    getResources(): Map<ResourceType, string[]>;
    getVertexAttributes(): string[];
    registerFramebuffer(framebufferName: string, width: number, height: number, colorAttachments: ReadonlyMap<number, {
        textureName: string;
        layer?: number;
    }>, depthAttachment?: {
        textureName: string;
        layer?: number;
    } | null, stencilAttachment?: {
        textureName: string;
        layer?: number;
    } | null): void;
    registerProgram(programName: string, shaderNames: ReadonlyArray<string>): void;
    registerShader(shaderName: string, source: string, type?: ShaderType): void;
    registerPrimitive(primitiveName: string, count?: number, attributes?: ReadonlyMap<string, string>, indices?: string | null, type?: PrimitiveType): void;
    registerAccessor(accessorName: string, bufferName: string, shaderDataType?: ShaderDataType, bufferDataType?: BufferDataType, offset?: number, stride?: number, normalized?: boolean): void;
    registerBuffer(bufferName: string, byteLength: number, target?: BufferTarget): void;
    registerSampler(samplerName: string, magFilter?: TextureFilter, minFilter?: TextureFilter, wrapS?: TextureWrapping, wrapT?: TextureWrapping, wrapR?: TextureWrapping): void;
    registerTexture(textureName: string, width?: number, height?: number, depth?: number, type?: TextureType, format?: TextureFormat): void;
    deleteFramebuffer(framebufferName: string): void;
    deleteProgram(programName: string): void;
    deleteShader(shaderName: string): void;
    deletePrimitive(primitiveName: string): void;
    deleteAccessor(accessorName: string): void;
    deleteBuffer(bufferName: string): void;
    deleteSampler(samplerName: string): void;
    deleteTexture(textureName: string): void;
    private invalidateFramebuffer;
    private invalidateProgram;
    private invalidateShader;
    private invalidatePrimitive;
    private invalidateAccessor;
    private invalidateBuffer;
    private invalidateSampler;
    private invalidateTexture;
    private getLoadedFramebuffer;
    private getLoadedProgram;
    private getLoadedShader;
    private getLoadedPrimitive;
    private getLoadedAccessor;
    private getLoadedBuffer;
    private getLoadedSampler;
    private getLoadedTexture;
    writeBufferData(bufferName: string, srcData: ArrayBufferView, bufferOffset?: number, srcOffset?: number, length?: number): void;
    readBufferData(bufferName: string, dstData: ArrayBufferView, bufferOffset?: number, dstOffset?: number, length?: number): void;
    writeTextureURI(textureName: string, srcURL: string, srcDepth?: number, textureXOffset?: number, textureYOffset?: number, textureZOffset?: number, srcXOffset?: number, srcYOffset?: number, srcZOffset?: number, regionWidth?: number, regionHeight?: number, regionDepth?: number): void;
    writeTextureImage(textureName: string, srcImage: HTMLImageElement, srcDepth?: number, textureXOffset?: number, textureYOffset?: number, textureZOffset?: number, srcXOffset?: number, srcYOffset?: number, srcZOffset?: number, regionWidth?: number, regionHeight?: number, regionDepth?: number): void;
    writeTextureData(textureName: string, srcData: ArrayBufferView, srcWidth?: number, srcHeight?: number, srcDepth?: number, textureXOffset?: number, textureYOffset?: number, textureZOffset?: number, srcXOffset?: number, srcYOffset?: number, srcZOffset?: number, regionWidth?: number, regionHeight?: number, regionDepth?: number): void;
    readTextureImage(textureName: string, mimeType?: string, dstWidth?: number, dstHeight?: number, dstDepth?: number, textureXOffset?: number, textureYOffset?: number, textureZOffset?: number, dstXOffset?: number, dstYOffset?: number, dstZOffset?: number, regionWidth?: number, regionHeight?: number, regionDepth?: number): Promise<HTMLImageElement>;
    readTextureURI(textureName: string, mimeType?: string, dstWidth?: number, dstHeight?: number, dstDepth?: number, textureXOffset?: number, textureYOffset?: number, textureZOffset?: number, dstXOffset?: number, dstYOffset?: number, dstZOffset?: number, regionWidth?: number, regionHeight?: number, regionDepth?: number): string;
    readTextureData(textureName: string, dstData: ArrayBufferView, dstWidth?: number, dstHeight?: number, dstDepth?: number, textureXOffset?: number, textureYOffset?: number, textureZOffset?: number, dstXOffset?: number, dstYOffset?: number, dstZOffset?: number, regionWidth?: number, regionHeight?: number, regionDepth?: number): void;
    clear(framebufferName?: string | null): void;
    render(programName: string, primitiveName: string, uniforms?: ReadonlyMap<string, ArrayBufferView>, textures?: ReadonlyMap<string, {
        textureName: string;
        samplerName: string;
    }>, framebufferName?: string | null): void;
}
