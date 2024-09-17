export const server = {
    detailTemplateType: "/ppt/v1/templateTypes/name",
    submitSuggestions :"/ppt/v2/create",
    getSuggestions:"/ppt/v1/suggestions/:templateTypeId",
    getTopics:"/ppt/v1/:execution_id/getTopics",
    updateTopics:"/ppt/v1/:execution_id/update",
    getPPTDetail:"/ppt/v1/detail/:execution_id",
    slideThumbnail:"/ppt/v1/assets/:execution_id/:slideId/:quality",
    getPresentations:"/ppt/v1/ppt/list", 
    sendFeedback:"/ppt/v1/:execution_id/feedback",
    templateThumbnail: "/ppt/v1/:templateId/thumbnail",
    permissions: "/ppt/v1/hasPermission",
    getInitialTemplate: "/ppt/v2/initialTemplate",
    templateSelection: "/ppt/v1/templateSelection",
    regenerateTopics: "/ppt/v2/regenerateTopics/:execution_id",
    mapPPTGPTToUser: "/ppt/v1/mapPPTGPTToUser/:execution_id",
    googleFileId: "/ppt/v1/googleDrive/:execution_id",
    changeTemplate :"/ppt/v1/:execution_id/changeTemplate"
}