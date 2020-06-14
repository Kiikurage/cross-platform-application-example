OUT_DIR=./build/proto

rm -rf ${OUT_DIR}
mkdir -p ${OUT_DIR}

$(npm bin)/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --grpc_out=${OUT_DIR} \
    --grpc-web_out="import_style=typescript,mode=grpcwebtext:${OUT_DIR}" \
    --plugin="protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`" \
    -I ../common/src/commonMain/proto \
    api.proto model.proto
