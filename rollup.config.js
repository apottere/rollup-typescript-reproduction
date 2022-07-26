import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/index.ts',
    output: {
        file: 'build/bundle.js',
        format: 'es',
    },
    plugins: [nodeResolve(), typescript({ noEmitOnError: true, outputToFilesystem: true })]
};